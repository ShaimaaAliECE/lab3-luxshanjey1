const mysql = require('mysql');
const { VARCHAR } = require('mysql/lib/protocol/constants/types');

let conn = mysql.createConnection({
    host: '35.188.6.157', 
    user: 'root',
    password: 'password124', 
    database: 'usersDB',
});

conn.connect();

conn.query('Drop Table Time', 
            (err, rows, fields) => {
                if (err) 
                    console.log(err);
                else 
                    console.log("Time Table Dropped");   
            }
        );

conn.query('Drop Table SignIn', 
                    (err, rows, fields) => {
                        if (err) 
                            console.log(err);
                        else 
                            console.log("Sign In Table Dropped");   
                    }
                );

conn.query('Drop Table Doodle', 
                (err, rows, fields) => {
                    if (err) 
                        console.log(err);
                    else 
                        console.log("Doodle Table Dropped");   
                }
            );

//create a table for all the times available 
conn.query(`CREATE TABLE Time
(
Header varchar(100),
T1 varchar(100),
T2 varchar(100),
T3 varchar(100),
T4 varchar(100),
T5 varchar(100),
T6 varchar(100),
T7 varchar(100),
T8 varchar(100),
T9 varchar(100),
T10 varchar(100)
)
`
,(err, rows, fields) => {
    if(err)
        console.log(err)
    else
        console.log('Table Created')
}
);

//create a table for sign in information for the user
conn.query(`CREATE TABLE SignIn
            (
                Username VARCHAR(100),
                Password VARCHAR(100)
            )
            `
            ,(err, rows, fields) => {
                if(err)
                    console.log(err)
                else
                    console.log('Table Created')
            }
        );

//create a table for all the doodles
conn.query(
        `CREATE TABLE Doodle
        (
            uName varchar(100),
            T1 BOOL,
            T2 BOOL,
            T3 BOOL,
            T4 BOOL,
            T5 BOOL,
            T6 BOOL,
            T7 BOOL,
            T8 BOOL,
            T9 BOOL,
            T10 BOOL
        )
        `
        ,(err, rows, fields) => {
        if(err)
            console.log(err)
        else
            console.log('Table Created')
        }
    );


 
conn.end();