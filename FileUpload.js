var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('myimage'));
app.use(bodyParser.urlencoded({ entended: false}));
app.use(multer({dest: 'tmp/'}).single('myFile'));

app.get('/indexFileUpload.html', function(req, res){
	res.sendFile(__dirname+ "/" + "indexFileUpload.html");
})

app.post('/file_upload', function(req, res){

	console.log(req.file);
	
	console.log("Original Name file: " + req.file.originalname);
	console.log("Path: " + req.file.path);
	console.log("Mime Type: " + req.file.mimetype);
	
	var file = __dirname + "/" + req.file.originalname;
	
	fs.readFile(req.file.path, function(err, data){
		fs.writeFile(file, data, function(err){
			if(err)
				console.log(err);
			else{
				response = {
					message: 'File Upload Successfully',
					filename: req.file.originalname
				};
			}
			
		console.log(response);
		res.end(JSON.stringify(response));
		});
	});
})

var server = app.listen(8081, function(req, res){
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Example app listening at http://%s:%s", host, port);
})

