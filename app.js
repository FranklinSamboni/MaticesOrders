'use strict';

if (process.env.NODE_ENV !== 'test') {
  require('dotenv').config()
}

var express = require('express');
var app = express();
var server = require('http').Server(app);
var port = process.env.PORT || 3000;

var route = require('./app/routes.js');
var cors = require('cors');

const { connectToDatabase } = require('./app/db/DatabaseService.js');

app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({limit: '50mb'}));

app.use(cors());

// middleware
app.use(function(req, res, next) {
	connectToDatabase()
	.then(function(){
		next();
	})
	.catch((err) => {
		console.log(err);
	});
});

//SET HEADER
app.use(function (req, res, next) {
  res.header('Access-Control-Expose-Headers', 'Access-Control-Allow-Origin');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  next();
});

app.use('/matices/api/v1', route);


//SERVER CONNECTION
server.listen(port, function () {
  console.log("Listening " + ':' + port);
});

// Serverless
const serverless = require('serverless-http');
module.exports.handler = serverless(app);