//setup the codes to establish connection to Nodejs to MySQL
// var mysql = require("mysql");

// var port = 3306;

// var connection;

// if (process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
var mysql = require('mysql');
var connection;

	
connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: " YES ",
	database: 'burgers_db'
});



connection.connect(function(err){

	if(err){
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;