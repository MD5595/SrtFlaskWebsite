
from flask_cors import CORS

from utils.utils import load_flashcards
import json
from flask import Flask, request, jsonify
import sqlite3 as sql
import utils.db as db
from datetime import datetime


app = Flask(__name__, static_url_path='', static_folder='my-app/src')
cors = CORS(app, supports_credentials=True)
CORS(app)


@app.route('/students', methods=['POST'])
def add_student():
    username = request.json['username']
    newStudent = request.json['isChecked']
    conn = db.connect_db()
    if newStudent:
        query = f'''INSERT INTO students (username, total_time) VALUES (?, ?)'''
        conn.cursor().execute(query, (username, 0))
        conn.commit()
        return jsonify({'message': 'Student added successfully'}), 201
    else:
        return jsonify({'message': 'Not new user'})


@app.route('/sendLocationTime', methods=['POST'])
def sendLocationTime():
    page = request.json['page']
    username = request.json['username']
    now = datetime.now().strftime("%d/%m/%Y %H:%M:%S").split(' ')
    conn = db.connect_db()
    query = f'''INSERT INTO UserLocationTime (username, page, date, time) VALUES (?, ?, ?, ?)'''
    conn.cursor().execute(query, (username, page, now[0], now[1]))
    conn.commit()
    return jsonify({'message': 'Time added'}), 201

@app.route('/pretestProgram', methods=['POST'])
def pretestProgram():
    data = request.get_json()
    answers = json.dumps(data.get('answers'))
    username = data.get('username')
    conn = db.connect_db()

    query = f'''INSERT INTO preTest (username, code) VALUES (?, ?)'''

    conn.cursor().execute(query, (username,answers))
    conn.commit()
    return jsonify({'message': 'Code added'})


@app.route('/posttestProgram', methods=['POST'])
def posttestProgram():
    data = request.get_json()
    answers = json.dumps(data.get('answers'))
    username = data.get('username')
    conn = db.connect_db()

    query = f'''INSERT INTO postTest (username, code) VALUES (?, ?)'''

    conn.cursor().execute(query, (username, answers))
    conn.commit()
    return jsonify({'message': 'Code added'})


@app.route('/getQuizScores', methods=['GET'])
def getQuizScores():
    username = request.args.get('username')
    conn = db.connect_db()
    query = f'''select test, max(score) from scores where username = ? group by test'''
    record = conn.cursor().execute(query, (username,)).fetchall()
    score_list = []
    for score in record:
        score_data = {
            'tes': score[0],
            'score': score[1]
        }
        score_list.append(score_data)
    return score_list



@app.route('/getUserScore', methods =['GET'])
def getUserScore():
    username = request.args.get('username')
    scores = Scores.query.filter_by(username=username).all()

    score_list = []
    for score in scores:
        score_data = {
            'test_name': score.test_name,
            'test_score': score.test_score
        }
        score_list.append(score_data)
    return score_list


@app.route('/postUserScore', methods=['POST'])
def postUserScore():
    data = request.get_json()
    username = data.get('username')
    test = data.get('test')
    score= data.get('score')

    conn = db.connect_db()
    query = f'''INSERT INTO scores (username, test, score) VALUES (?, ?, ?)'''
    conn.cursor().execute(query, (username, test, score))
    conn.commit()
    return jsonify({'message': 'Score added'}), 201


@app.route('/get_flashcards', methods=['POST'])
def get_flashcards():
    unit = request.json['unit']
    flashcards = load_flashcards('./flask-app/flashcards.csv')
    results = []
    for entry in flashcards[unit]:
        results.append({'question': entry[0], 'answer': entry[1]})
    res = json.dumps({'results': results})
    print(res)
    return res

@app.route('/get_units')
def get_units():
    units = ['Unit 1', 'Unit 2', 'Unit 3', 'Unit 4', 'Unit 5', 'Unit 6']
    response = []
    count = 1
    for u in units:
        response.append({'id': count, 'name': u})
        count += 1
    res = json.dumps({'units': response})
    return res


if __name__ == '__main__':
    app.run(debug=True, port=5000)
