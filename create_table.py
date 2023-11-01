import sqlite3
from flask import Flask

conn = sqlite3.connect('database.db')
print("Connected to database successfully")

conn.execute('CREATE TABLE students (username TEXT, sessionTime INTEGER, clickAmount INTEGER)')
print("Created table successfully!")

conn.close()
