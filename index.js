const express = require('express');
//const req = require('express/lib/request');
//const Connection = require('mysql/lib/Connection');
const newConnection = require('./DBConnection')

const app = express(); //returns instance of a server

//serve staic contents
app.use(express.static('static'));
//dynaminc handling


//LOGIN
app.get('/login', (request, response) => {
    let conn = newConnection();
    conn.connect();

    conn.query(`select * from SignIn`
                ,
                (err, rows, fields) => {
                    if(err){
                        console.log(err);
                    }else{ 
                        let signIn = rows;
                        //if password and username match the one in the database
                        if(request.query.username == signIn[0].username && request.query.password == signIn[0].password)
                            response.redirect('/adminPage'); //redirect if correct
                        else 
                            response.redirect('/signIn'); //if wrong refresh page
                }
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
            content += `<table style = 'border: 2px solid black'>`;
            let headers = rows;
            content += '<tr>'
            content += `<th>${headers[0].Header}</th>`;
            content += `<th>${headers[0].t0}</th>`;
            content += `<th>${headers[0].t1}</th>`;
            content += `<th>${headers[0].t2}</th>`;
            content += `<th>${headers[0].t3}</th>`;
            content += `<th>${headers[0].t4}</th>`;
            content += `<th>${headers[0].t5}</th>`;
            content += `<th>${headers[0].t6}</th>`;
            content += `<th>${headers[0].t7}</th>`;
            content += `<th>${headers[0].t8}</th>`;
            content += `<th>${headers[0].t9}</th>`;
            content += '</tr>';
            response.write(content);
            if (err)
                console.log(err);


        }
    );
    //displays stored data
    conn.query('select * from Doodle',
        (err,rows, fields) => {
            let data = rows;
            let content = '';
            for(d of data){
                content += '<tr>';
                content += `<td>${d.Name}</td>`;
                content += `<td style = 'background-color: 
                ${d.t0 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t1 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t2 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t3 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t4 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t5 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t6 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t7 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t8 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t9 ? "blue" : "grey"}'></td>`;
                content += '</tr>';
            }
                content += "</table>";
                //a link to the time change page
                content+= "<a href='/timeChange'>Click Here To Change Times</a>";

                response.write(content);
                response.end();
        }
    );

    conn.end();

});

app.get('/timeChange', (request, response)=> {
    let conn = newConnection();
    conn.connect();

    //page for users to be able to change values 
    conn.query('select * from Time', 
        (err, rows, fields) => {
            let content = '';
            let time = rows;

            content += "<form action = '/changeTime'>";
            content += `First Available Time:  <input name = 't0' value ='${time[0].t0}'/></br>`;
            content += `Second Available Time: <input name = 't1' value ='${time[0].t1}'/></br>`;
            content += `Third Available Time:  <input name = 't2' value ='${time[0].t2}'/></br>`;
            content += `Fourth Available Time: <input name = 't3' value ='${time[0].t3}'/></br>`;
            content += `Fifth Available Time:  <input name = 't4' value ='${time[0].t4}'/></br>`;
            content += `Sixth Available Time:  <input name = 't5' value ='${time[0].t5}'/></br>`;
            content += `Seventh Available Time: <input name = 't6' value ='${time[0].t6}'/></br>`;
            content += `Eighth Available Time:  <input name = 't7' value ='${time[0].t7}'/></br>`;
            content += `Ninth Available Time;<input name = 't8' value ='${time[0].t8}'/></br>`;
            content += `Tenth Available Time: <input name = 't9' value ='${time[0].t9}'/></br>`;
            content += `<input type = 'submit' value ='save'>`;
            content += '</form>';

            response.send(content);
        }
    );
    conn.end();
}
);

//UPDATE THE TABLE
app.get('/changeTime', (request, response) => {
    let conn = newConnection();
    conn.connect();
    conn.query(`UPDATE Time set Header = 'Name'`, (err, rows, fields) => {
      if (err) 
        console.log(err);
    });
    //use values given to update table
    conn.query(
      `UPDATE Time set t0 = '${request.query.t0}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set t1 = '${request.query.t1}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set t2 = '${request.query.t2}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set t3 = '${request.query.t3}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set t4 = '${request.query.t4}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set t5 = '${request.query.t5}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set t6 = '${request.query.t6}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set t7 = '${request.query.t7}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set t8 = '${request.query.t8}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set t9 = '${request.query.t9}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);

        //redirect user to the admin page
        response.redirect("/adminPage"); 
      }
    );
  
    conn.end();
    }
);

//page for guests
app.get('/guestPage', (request, response) => {
    let conn = newConnection();
    conn.connect();

    conn.query('select * from Time', 
        (err, rows, fields) => {
            let content = '';
            content += `<table style = 'border: 1px solid black'>`;
            let headers = rows;
            content += '<tr>';
            content += `<th>${headers[0].Header}</th>`;
            content += `<th>${headers[0].t0}</th>`;
            content += `<th>${headers[0].t1}</th>`;
            content += `<th>${headers[0].t2}</th>`;
            content += `<th>${headers[0].t3}</th>`;
            content += `<th>${headers[0].t4}</th>`;
            content += `<th>${headers[0].t5}</th>`;
            content += `<th>${headers[0].t6}</th>`;
            content += `<th>${headers[0].t7}</th>`;
            content += `<th>${headers[0].t8}</th>`;
            content += `<th>${headers[0].t9}</th>`;
            content += '</tr>';

            response.write(content);

            if(err)
                console.log(err);
        });
    //displays stored data 
    conn.query('select * from Doodle',
        (err,rows, fields) => {
            let data = rows;
            let content = '';
            for(d of data){
                content += '<tr>';
                content += `<td>${d.Name}</td>`;
                content += `<td style = 'background-color: 
                ${d.t0 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t1 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t2 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t3 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t4 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t5 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t6 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t7 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t8 ? "blue" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.t9 ? "blue" : "grey"}'></td>`;
                content += '</tr>';

        }

            //update table within the form
            content += '<tr>';
            content += `<form action = '/addData' id = 'form'>
                            <td><input name = "name"/></td>
                            <td><input type = "checkbox" name = "t0" form = 'form'/></td>
                            <td><input type = "checkbox" name = "t1" form = 'form'/></td>
                            <td><input type = "checkbox" name = "t2" form = 'form'/></td>
                            <td><input type = "checkbox" name = "t3" form = 'form'/></td>
                            <td><input type = "checkbox" name = "t4" form = 'form'/></td>
                            <td><input type = "checkbox" name = "t5" form = 'form'/></td>
                            <td><input type = "checkbox" name = "t6" form = 'form'/></td>
                            <td><input type = "checkbox" name = "t7" form = 'form'/></td>
                            <td><input type = "checkbox" name = "t8" form = 'form'/></td>
                            <td><input type = "checkbox" name = "t9" form = 'form'/></td>
                        </form>`;
            content += '</tr>';
            content += '</table>';
            content += "<input type = 'submit' value = 'save' form = 'form'/> ";
            
            response.write(content);

            response.end();
        }
    );
    conn.end();
    
});

app.get('/addData', (request, response) => {
    let conn = newConnection();
    conn.connect();

    conn.query(
        //if the value exists then it is true, else it is false
        `insert into Doodle values (
            '${request.query.name}',
            '${request.query.t0 ? 1 : 0},
            '${request.query.t1 ? 1 : 0}',
            '${request.query.t2 ? 1 : 0}',
            '${request.query.t3 ? 1 : 0}',
            '${request.query.t4 ? 1 : 0}',
            '${request.query.t5 ? 1 : 0}',
            '${request.query.t6 ? 1 : 0}',
            '${request.query.t7 ? 1 : 0}',
            '${request.query.t8 ? 1 : 0}',
            '${request.query.t9 ? 1 : 0}'
            )`,
        (err, rows, fields) => {
          response.redirect("/guestPage");
          if (err) 
            console.log(err);
        }
      );
    
      conn.end();
});


app.listen(80);