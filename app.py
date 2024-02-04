from sqlite3 import IntegrityError

from flask_cors import CORS, cross_origin

from utils.utils import load_flashcards
import json
from flask import Flask, render_template, request, jsonify, session, send_from_directory
import sqlite3 as sql
import datetime
import utils.db as db
from datetime import datetime


from datetime import timedelta
from flask import make_response, request, current_app
from functools import update_wrapper


app = Flask(__name__, static_folder='my-app/src')
CORS(app, supports_credentials=True)

def crossdomain(origin=None, methods=None, headers=None, max_age=21600,
                attach_to_all=True, automatic_options=True):
    """Decorator function that allows crossdomain requests.
      Courtesy of
      https://blog.skyred.fi/articles/better-crossdomain-snippet-for-flask.html
    """
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    # use str instead of basestring if using Python 3.x
    if headers is not None and not isinstance(headers, list):
        headers = ', '.join(x.upper() for x in headers)
    # use str instead of basestring if using Python 3.x
    if not isinstance(origin, list):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        """ Determines which methods are allowed
        """
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        """The decorator function
        """
        def wrapped_function(*args, **kwargs):
            """Caries out the actual cross domain code
            """
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers
            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            h['Access-Control-Allow-Credentials'] = 'true'
            h['Access-Control-Allow-Headers'] = \
                "Origin, X-Requested-With, Content-Type, Accept, Authorization"
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator

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
    code = data.get('code')
    username = data.get('username')

    answer = PreTest(username=username,code = code)
    db.session.add(answer)
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

    db.session.add(entry)
    db.session.commit()


@app.route('/posttestProgram', methods=['POST'])
def posttestProgram():
    data = request.get_json()
    code = data.get('code')
    username = data.get('username')

    answer = PostTest(username=username,code = code)
    db.session.add(answer)
    db.session.commit()

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
