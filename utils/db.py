"""This module provides the database connection and capabilities
"""
import sqlite3 as sql


def connect_db():
    conn = sql.connect('./utils/srt.db', check_same_thread=False)
    return conn