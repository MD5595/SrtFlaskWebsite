from sqlite3 import IntegrityError

from flask_cors import CORS

from create_table import UserLocationTime, Students, Scores
from utils import load_flashcards
import json
from flask import Flask, render_template, request, jsonify, session, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_sqlalchemy import SQLAlchemy
import sqlite3
import datetime



app = Flask(__name__, static_url_path='', static_folder='my-app/src')
cors = CORS(app, supports_credentials=True)

api = Api(app)
app.config['SECRET_KEY'] = 'Keeey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)
app_name = 'myapp'



@app.route("/totalTime", methods=["POST"])
def totalTime():
    data = request.get_json()
    username = request.json['username']

    time = request.json["time"]

    student = Students.query.filter_by(username=username).first()
    student.time += time
    db.session.commit()

@app.route("/signup", methods=["POST"])
def signup():
    username = request.json["username"]
    existing_user = Students.query.filter_by(username=username).first()

    if existing_user is not None:
        session['user_id'] = existing_user.id
        return render_template('home.html')
    else:
        new_user = Students(username=username, totalTime=0)
        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id

        return render_template('home.html')

      


@app.route('/Students', methods=['GET'])
def get_students():
    students = Students.query.all()
    return jsonify({'Students': [{'username': Students.username} for student in Students]})

  
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    new_username = data.get('username')
    isChecked = data.get('isChecked')

    if new_username and isChecked:
        new_student1 =UserLocationTime(username=new_username)
        db.session.add(new_student1)
        db.session.commit()


        new_student = Students(username=new_username)
        db.session.add(new_student)
        db.session.commit()
        return jsonify({'message': 'Student added successfully'}), 201
    else:
        return jsonify({'message': 'Invalid data provided'}), 400


@app.route('/sendlocationTime', methods=['POST'])
def sendlocationTime():
    data = request.get_json()
    page = data.get('page')
    username = data.get('username')

    dateAndTime = datetime.datetime.now()
    time1 = dateAndTime.strftime('%X')
    date1 = dateAndTime.strftime('%x')

    entry = UserLocationTime(username = username, time=time1, date = date1, page= page)
    db.session.add(entry)
    db.session.commit()

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
    return jsonify({'scores': score_list})

@app.route('/postUserScore', methods=['POST'])
def postUserScore():
    data = request.get_json()
    username = data.get('username')
    test = data.get('test')
    score= data.get('score')

    entry = Scores(username=username, test=test, score=score)
    try:
        db.session.add(entry)
        db.session.commit()
    except IntegrityError:
        pass
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
