var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";





MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");


//   var myobj = { name: "Companyasdasdasdsad Inc", address: "Highway asdsadsadasd" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });


  //dbo.collection("customers").find({}, function(err, result) {
    dbo.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});