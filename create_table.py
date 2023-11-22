from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database.db'
db = SQLAlchemy(app)

class Students(db.Model):
    username = db.Column(db.String, primary_key=True)
    sessionTime = db.Column(db.Integer)
    clickAmount = db.Column(db.Integer)



with app.app_context():
    db.create_all()
    print("Table is Ready")
