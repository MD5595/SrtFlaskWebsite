import sqlite3

# Connecting to sqlite
# connection object
connection_obj = sqlite3.connect('database.db')

# cursor object
cursor_obj = connection_obj.cursor()



# Creating table
table = """ CREATE TABLE Students (
            username TEXT,
            sessionTime INTEGER,
            clickAmount INTEGER
        ); """

cursor_obj.execute(table)

print("Table is Ready")

# Close the connection
connection_obj.close()
