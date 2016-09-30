var express = require('express');
var app = express();

// This response with "Hello World" on Homepage
app.get('/', function(req, res){
	console.log("Got a GET request for the homepage");
	res.send("Hello GET");
});

// This response a POST request for the Homepage
app.post('/', function(req, res){
	console.log("Got a POST resquest for the hompage");
	res.send("Hello POST");
});

// This response a DELETE request for the '/del_user' page
app.delete('/del_user', function(req, res){
	console.log("Got a DELETE request for '/del_user'");
	res.send('Hello DELETE');
});

// This response a GET request for the '/list_user' page
app.get('/list_user', function(req, res){
	console.log("Got a GET request for '/list_user'");
	res.send('Page Listing');
});

// This response a GET request for abc, abcx, adn1ds, ...
app.get('/ab*cd', function(req, res){
	console.log("Got a GET request for '/ab*cd'");
	res.send('Page Pattern Match');
});

var server = app.listen(8081, function(req, res){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Example app listening at http://%s:%s", host, port);
});