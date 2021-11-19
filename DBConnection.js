const mysql = require('mysql');

function newConnection()
{
    let conn = mysql.createConnection({
        host: '35.188.6.157', 
        user: 'root',
        password: 'password124', 
        database: 'usersDB',
    });
    return conn;
}
module.exports = newConnection;