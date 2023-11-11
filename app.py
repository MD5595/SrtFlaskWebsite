from flask import Flask, render_template, request, jsonify, session,send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from ApiHandler import ApiHandler1
import sqlite3
from create_table import db, Students

app = Flask(__name__, static_url_path='', static_folder='my-app/src')
CORS(app)
api = Api(app)
app.config['SECRET_KEY'] = 'Keeey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app_name = 'myapp'



@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


api.add_resource(ApiHandler1, '/flask/hello')

@app.route("/")
def homepage():
    return render_template('home.html')

@app.route("/signup", methods=["POST"])
def signup():
    username= request.json["username"]
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



@app.route('/syllabus')
def index_page():
    return render_template('syllabus.html')




if __name__ == '__main__':
    app.run(debug=True, port=8002)