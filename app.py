from flask_cors import CORS
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


@app.route("/signup", methods=["POST"])
def signup():
    username = request.json["username"]
    existing_user = Students.query.filter_by(username=username).first()

    if existing_user is not None:
        session['user_id'] = existing_user.id
        return render_template('home.html')
    else:
        new_user = Students(username=username, sessionTime=0, clickAmount=0)
        db.session.add(new_user)
        db.session.commit()
        session['user_id'] = new_user.id

        return render_template('home.html')

      
@app.route("/addTime", methods=["POST"])
def addtTime():
    username = request.json["username"]
    user = Students.query.filter_by(username=username).first()


@app.route('/Students', methods=['GET'])
def get_students():
    students = Students.query.all()
    return jsonify({'Students': [{'username': Students.username} for student in Students]})

  
@app.route('/students', methods=['POST'])
def add_student():
    data = request.get_json()
    new_username = data.get('username')


    if new_username:
        user_db_uri = f'sqlite:///{new_username}_database.db'
        user_db = SQLAlchemy(app)
        user_db.app = app
        user_db.init_app(app)
        class User(user_db.Model):
            __tablename__ = new_username
            username = user_db.Column(user_db.String, primary_key=True)
            sessionTime = user_db.Column(user_db.Integer, default=0)
            quizTime = user_db.Column(user_db.Integer, default=0)
            flashcardTime = user_db.Column(user_db.Integer, default=0)

        new_student = Students(username=new_username)
        db.session.add(new_student)
        db.session.commit()
        return jsonify({'message': 'Student added successfully'}), 201
    else:
        return jsonify({'message': 'Invalid data provided'}), 400

@app.route('/locationTime', methods=['POST'])
def get_locationTime():
    data = request.get_json()
    username = data.get('username')
    dateAndTime = datetime.datetime.now()
    time = dateAndTime.strftime('%X')
    date = dateAndTime.strftime('%x')



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
    units = ['Unit 1', 'Unit 2']
    response = []
    count = 1
    for u in units:
        response.append({'id': count, 'name': u})
        count += 1
    res = json.dumps({'units': response})
    return res


if __name__ == '__main__':
    app.run(debug=True, port=5000)
