const express = require('express');
const req = require('express/lib/request');
const Connection = require('mysql/lib/Connection');
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
                        console.log(err)
                    }else{ 
                        let signIn = rows;
                        //if password and username match the one in the database
                        if(request.query.username == signIn[0].username && request.query.password == signIn[0].password)
                            response.redirect('/adminPage'); //redirect if correct
                        else 
                            response.redirect('/signIn') //if wrong refresh page
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

    conn.query('select * from Doodle',
        (err,row, fields) => {
            let data = rows;
            let content = '';
            for(d of data){
                content += '<tr>';
                content += `<td>${d.Name}</td>`;
                content += `<td style = 'background-color: 
                ${d.Time1 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time2 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time3 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time4 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time5 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time6 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time7 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time8 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time9 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time10 ? "green" : "grey"}'></td>`;
                content += '</tr>';
            }
                content += "</table>";
                //a link to the time change page
                content+= "<a href='/timeChange'>Click Here To Change Times</a>";

                response.write(content);
                response.end();
        }
    );

    conne.end();

});

app.get('/timeChange', (request, response)=> {
    let conn = newConnection();
    conn.connect();

    //page for users to be able to change values 
    conn.query('select * from Time', 
        (err, rows, fields) => {
            let content = '';
            let time = rows;

            content += "<form action = '</changeTime'>";
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
            content += '</form>';

            response.send(content);
        }
    );
    conn.end();
}
);

//UPDATE THE TABLE
app.get('/changeTime', (request, response) => {
    let conn = newConnnection();
    conn.connect();
    conn.query(`UPDATE Time set Header = 'Name'`, (err, rows, fields) => {
      if (err) 
        console.log(err);
    });
    //use values given to update table
    conn.query(
      `UPDATE Time set T0 = '${request.query.t0}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set T1 = '${reuest.query.t1}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set T2 = '${request.query.t2}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set T3 = '${request.query.t3}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set T4 = '${request.query.t4}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set T5 = '${request.query.t5}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set T6 = '${request.query.t6}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set T7 = '${request.query.t7}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set T8 = '${request.query.t8}'`,
      (err, rows, fields) => {
        if (err) 
            console.log(err);
      }
    );
    conn.query(
      `UPDATE Time set T9 = '${request.query.t9}'`,
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

            let headers = rows;
            content += '<tr>';
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
    
    conn.query('select * from Doodle',
        (err,row, fields) => {
            let data = rows;
            let content = '';
            for(d of data){
                content += '<tr>';
                content += `<td>${d.Name}</td>`;
                content += `<td style = 'background-color: 
                ${d.Time1 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time2 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time3 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time4 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time5 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time6 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time7 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time8 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time9 ? "green" : "grey"}'></td>`;
                content += `<td style = 'background-color: 
                ${d.Time10 ? "green" : "grey"}'></td>`;
                content += '</tr>';
            }

            //update table within the form
            content += '<tr>';
            content += `<form action = '/add-data' id = 'form'>
                            <td><input name = "name"/></td>
                            <td><input type = 'checkbox' name = "t0" form = 'form'/></td>
                            <td><input type = 'checkbox' name = "t1" form = 'form'/></td>
                            <td><input type = 'checkbox' name = "t2" form = 'form'/></td>
                            <td><input type = 'checkbox' name = "t3" form = 'form'/></td>
                            <td><input type = 'checkbox' name = "t4" form = 'form'/></td>
                            <td><input type = 'checkbox' name = "t5" form = 'form'/></td>
                            <td><input type = 'checkbox' name = "t6" form = 'form'/></td>
                            <td><input type = 'checkbox' name = "t7" form = 'form'/></td>
                            <td><input type = 'checkbox' name = "t8" form = 'form'/></td>
                            <td><input type = 'checkbox' name = "t9" form = 'form'/></td>
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
            '${req.query.name}',
            '${req.query.t0 ? 1 : 0},
            '${req.query.t1 ? 1 : 0}',
            '${req.query.t2 ? 1 : 0}',
            '${req.query.t3 ? 1 : 0}',
            '${req.query.t4 ? 1 : 0}',
            '${req.query.t5 ? 1 : 0}',
            '${req.query.t6 ? 1 : 0}',
            '${req.query.t7 ? 1 : 0}',
            '${req.query.t8 ? 1 : 0}',
            '${req.query.t9 ? 1 : 0}'
            )`,
        (err, rows, fields) => {
          res.redirect("/guestPage");
          if (err) 
            console.log(err);
        }
      );
    
      conn.end();
})


app.listen(80);