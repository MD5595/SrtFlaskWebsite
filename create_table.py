import sqlite3

# Connecting to sqlite
# connection object
connection_obj = sqlite3.connect('database.db')

# cursor object
cursor_obj = connection_obj.cursor()



# Creating table
table1 = """ CREATE TABLE Students (
            username TEXT,
            sessionTime INTEGER,
            clickAmount INTEGER
        ); """


cursor_obj.execute(table1)



print("Table is Ready")
connection_obj.commit()
# Close the connection
connection_obj.close()

