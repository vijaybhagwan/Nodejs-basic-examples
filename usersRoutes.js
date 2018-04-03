
var path = require("path");
var UserDataModel = require('../datamodel/UserDataModel').UserDataModel1;
var bodyParser = require('body-parser');

module.exports = function(app) {

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

    // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
    // app.get('/api/users', function(req, res) {
    //     //res.json({ message: 'hooray! welcome to our api!' });  
    //     var user_id = req.param('id');
    //     var token = req.param('token');
    //     var geo = req.param('geo');  
    //     res.json({ user_id: user_id });
    //     res.send(user_id + ' ' + token + ' ' + geo);
    // });

    // app.post('/api/users', function(req, res) {
    //     var user_id = req.body.id;
    //     var token = req.body.token;
    //     var geo = req.body.geo;

    //     res.send(user_id + ' ' + token + ' ' + geo);
    // });

    app.get('/api/getAll', function(req, res){
		UserDataModel.listAll().then(function(response){
			res.send(response);
		}, function(err){
			//res.status(500);
			res.send(err);
		});
        //res.send("3);
	});

    app.post('/api/add', function(req, res){
		console.log(req);
        UserDataModel.addUser(req.body, req.headers).then(function(response){
			res.send(response);
		}, function(err){
			//res.status(500);
			res.send(err);
		});		
		
        //res.send("3);
	});  

    app.post('/api/update', function(req, res){
        //console.log("Param" + req.param.id);
        UserDataModel.updateUser(req.body, req.headers).then(function(response){
			res.send(response);
		}, function(err){
			//res.status(500);
			res.send(err);
		});		
		 //res.send("3);
	});  

     app.get('/api/delete', function(req, res){
         UserDataModel.deleteLastUser(req.body, req.headers).then(function(response){
			res.send(response);
		}, function(err){
			res.status(500);
			res.send(err);
		});		
		 res.send("3");
	});  
}