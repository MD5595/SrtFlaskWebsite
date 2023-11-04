import sqlite3

connection = sqlite3.connect('database.db')

cursor= connection.cursor()


table1 = """ CREATE TABLE Students (
            username TEXT,
            sessionTime INTEGER,
            clickAmount INTEGER
        ); """


cursor.execute(table1)
print("Table is Ready")
connection.commit()
connection.close()

