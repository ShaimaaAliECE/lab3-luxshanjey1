const express = require('express');
const req = require('express/lib/request');
const newConnection = require('./DBConnection')

const app = express(); //returns instance of a server

//serve staic contents
app.use(expre.static('static'));
//dynaminc handling


//LOGIN
app.get('/login', (request, response) => {
    let conn = newConnection();
    conn.connect();

    conn.query(`select * from SignIn`
                ,
                (err, rows, fields) => {
                    if(err)
                        console.log(err)
                    else 
                        let signIn = rows;
                        //if password and username match the one in the database
                        if(request.query.username == signIn[0].username && request.query.password == signIn[0].password)
                            response.redirect('/adminPage'); //redirect if correct
                        else 
                            response.redirect('/signIn') //if wrong refresh page
                }
                );
    conn.end();
});

//admin page
app.get('/adminPage', (request, response) => {
    let conn = newConnection();
    conn.connect();

    //display Times available 
    conn.query('select * from Time', 
        (err, rows, fields) => {
            let content = '';
            let headers = rows;
            content += '<tr>'
            content += `<th>${headers[0].Header}</th>`;
            content += `<th>${headers[0].T0}</th>`;
            content += `<th>${headers[0].T1}</th>`;
            content += `<th>${headers[0].T2}</th>`;
            content += `<th>${headers[0].T3}</th>`;
            content += `<th>${headers[0].T4}</th>`;
            content += `<th>${headers[0].T5}</th>`;
            content += `<th>${headers[0].T6}</th>`;
            content += `<th>${headers[0].T7}</th>`;
            content += `<th>${headers[0].T8}</th>`;
            content += `<th>${headers[0].T9}</th>`;
            content += '</tr>';
            response.write(content);
            if (err)
                console.log(err);


        }
    );

});
app.listen(80);