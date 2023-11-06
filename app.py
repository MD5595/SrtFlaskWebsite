from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import sqlite3
from create_table import db, Students

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Keeey'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
app_name = 'myapp'


@app.route("/")
def homepage():
    return render_template('home.html')

@app.route("/signup", methods=["POST"])
def signup():
    username= request.json["username"]

    user_exists = Students.query.filter_by(username=username).first() is not None
    if user_exists:
        rf
    else:
        new_user = Students(username=username, sessionTime=0, clickAmount=0)
        db.session.add(new_user)
        db.session.commit()
        return render_template('home.html')



@app.route('/syllabus')
def index_page():
    return render_template('syllabus.html')




if __name__ == '__main__':
    app.run(debug=True, port=8002)