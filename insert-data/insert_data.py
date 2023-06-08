import mysql.connector
import os
import time
from dotenv import load_dotenv

time.sleep(8)

load_dotenv()

conn_params = {
    'host': os.getenv('DB_HOST'),
    'port': os.getenv('DB_PORT'),
    'user': os.getenv('DB_USER'),
    'password': os.getenv('DB_PASSWORD')
}

conn = mysql.connector.connect(**conn_params)
cursor = conn.cursor()

dbname = os.getenv('DATABASE_NAME')
tablename = os.getenv('TABLE_NAME')

create_db_str = f'CREATE DATABASE IF NOT EXISTS {dbname}'
create_table_str = f'CREATE TABLE IF NOT EXISTS {tablename} (\
                    id INT NOT NULL,\
                    name VARCHAR(40) NOT NULL)'

cursor.execute(create_db_str)
cursor.execute(f'USE {dbname}')
cursor.execute(create_table_str)

with open('data.csv') as f:
    lines = f.readlines()
    for line in lines[1:]:
        id, name = line.split(',')
        query = f'INSERT INTO {tablename} (id, name) VALUES (%s, %s)'
        values = (id, name)
        cursor.execute(query, values)


conn.commit()
cursor.close()
conn.close()