var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
	console.log('inside if');
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
		host: "localhost",
		user: "root",
		password: "ava",
		database: "burgers_db"
	});	
};

connection.connect();

module.exports = connection; 
