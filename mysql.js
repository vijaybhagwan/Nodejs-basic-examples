var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "test1"
});

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     sql='select * from users where id=3';
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Result: " + JSON.stringify(result));
//     });
//   }); 

//   con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     sql="insert into users (name,address) values('test','sad')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Result: " + JSON.stringify(result));
//     });
//   });


// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "DELETE FROM users WHERE id = '1'";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("Number of records deleted: " + result.affectedRows);
//     });
//   });


con.connect(function(err) {
    if (err) throw err;
    var sql = "UPDATE users SET name = 'bhagwan' WHERE id = '3'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });