from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

class Students(db.Model):
    username = db.Column(db.String, primary_key=True)
    clickAmount = db.Column(db.Integer)
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


with app.app_context():
    db.create_all()

    print("Tables are Ready")
