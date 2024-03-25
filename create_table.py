from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///srt.db'
db = SQLAlchemy(app)

class Students(db.Model):
    username = db.Column(db.String, primary_key=True)
    time = db.Column(db.Integer)
class UserLocationTime(db.Model):
    __tablename__ = 'UserLocationTime'
    username = db.Column(db.String, primary_key=True)
    page = db.Column(db.String)
    date = db.Column(db.String)
    time = db.Column(db.String)
class Scores(db.Model):
    __tablename__ = 'Scores'
    username = db.Column(db.String, primary_key=True)
    test = db.Column(db.String)
    score = db.Column(db.Integer)

class PreTest(db.Model):
    __tablename__ = 'PreTest'
    username = db.Column(db.String, primary_key=True)
    code = db.Column(db.String)
class PostTest(db.Model):
    __tablename__ = 'PostTest'
    username = db.Column(db.String, primary_key=True)
    code = db.Column(db.String)



def init_db():
    with app.app_context():
        db.create_all()
        print("Tables are Ready")


init_db()