const mysql = require('mysql');
//const { VARCHAR } = require('mysql/lib/protocol/constants/types');

let conn = mysql.createConnection({
    host: '35.188.6.157', 
    user: 'root',
    password: 'password124', 
    database: 'usersDB',
});

conn.connect();

conn.query(`Drop Table SignIn`, 
                    (err, rows, fields) => {
                        if (err) 
                            console.log(err);
                        else 
                            console.log("Sign In Table Dropped");   
                    }
                );


conn.query(`Drop Table Time`, 
            (err, rows, fields) => {
                if (err) 
                    console.log(err);
                else 
                    console.log("Time Table Dropped");   
            }
        );


conn.query(`Drop Table Doodle`, 
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
                t0 varchar(100),
                t1 varchar(100),
                t2 varchar(100),
                t3 varchar(100),
                t4 varchar(100),
                t5 varchar(100),
                t6 varchar(100),
                t7 varchar(100),
                t8 varchar(100),
                t9 varchar(100)
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
                username VARCHAR(100),
                password VARCHAR(100)
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
            t0 BOOL,
            t1 BOOL,
            t2 BOOL,
            t3 BOOL,
            t4 BOOL,
            t5 BOOL,
            t6 BOOL,
            t7 BOOL,
            t8 BOOL,
            t9 BOOL
        )
        `
        ,(err, rows, fields) => {
        if(err)
            console.log(err)
        else
            console.log('Table Created')
        }
    );

//create admin username and password and store within the database
conn.query(`insert into SignIn values ('abc', 'abc')`
            , (err, rows, fields) => {
                if(err)
                    console.log(err)
                else 
                    console.log('Row Inserted');
            }
        );

//create admin username and password and store within the database
conn.query(`insert into Time values ('Name', '8:00AM', '9:00AM', '10:00AM', '11:00AM', '12:00PM', '1:00PM', '2:00PM', '3:00PM', '4:00PM', '5:00PM')`
            , (err, rows, fields) => {
                if(err)
                    console.log(err)
                else 
                    console.log('Row Inserted');
            }
        );

conn.query(`select * from Time`
            ,
            (err, rows, fields) => {
                if(err)
                    console.log(err)
                else
                    console.log('Row Inserted');
                for (r of rows)
                    console.log(r);
            }
            );
conn.query(`select * from SignIn`
        ,
        (err, rows, fields) => {
            if(err)
                console.log(err)
            else
                console.log('Row Inserted');
            for (r of rows)
                console.log(r);
        }
        );        

conn.query(`select * from Doodle`
        ,
        (err, rows, fields) => {
            if(err)
                console.log(err)
            else
                console.log('Row Inserted');
            for (r of rows)
                console.log(r);
        }
        );    
 
conn.end();