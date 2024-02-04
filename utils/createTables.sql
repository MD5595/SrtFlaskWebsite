drop TABLE IF EXISTS students;
CREATE TABLE students(
	username TEXT PRIMARY KEY,
	total_time REAL
);

drop TABLE IF EXISTS userLocationTime;
CREATE TABLE userLocationTime(
    username TEXT,
	page TEXT,
	date TEXT,
	time TEXT
);

drop TABLE IF EXISTS scores;
CREATE TABLE scores(
	username TEXT,
	test TEXT,
	score REAL
);

drop TABLE IF EXISTS preTest;
CREATE TABLE preTest(
	username TEXT,
	code TEXT
);

drop TABLE IF EXISTS postTest;
CREATE TABLE postTest(
	username TEXT,
	code TEXT
);