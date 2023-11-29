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
    page = db.Column(db.Integer)
    date = db.Column(db.Integer)
    time = db.Column(db.Integer)


with app.app_context():
    db.create_all()

    print("Tables are Ready")
