const mysql = require('mysql');
const { VARCHAR } = require('mysql/lib/protocol/constants/types');

let conn = mysql.createConnection({
    host: '35.188.6.157', 
    user: 'root',
    password: 'password124', 
    database: 'usersDB',
});

conn.connect();

connection.query(' 
                    CREATE TABLE Person (
                        username VARCHAR(20), 
                        password VARCHAR(20),
                    );
                    '
                    , (error, rows, fields) => {
                        console.log(error);
                    });

connection.query('insert into Person values ("admin", "123")'
                , (error, rows, fields) => 
                {
                    console.log(error);
                });
conn.end();