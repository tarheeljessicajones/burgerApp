var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Dancebabi!91',
	database: 'burgers_db'
})

connection.connect(function(err){
	if(err){
		console.error("error connecting: "+ err.stack);
		return;
	}
	console.log("Connected as id: "+connection.threadId);
});

module.exports = connection;
