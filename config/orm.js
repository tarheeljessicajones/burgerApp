var connection = require('./connection.js');

var orm = {
	all: function(tableInput, cb){
		connection.query('SELECT * FROM '+ tableInput+ ';', function(err, result){
			if (err){
				console.log(err);
				return;
			};
				cb(result);
		});
	},
	create: function(tableInput, val, cb){
		connection.query('INSERT INTO '+tableInput+ ' (burger_name) VALUES ('+val+');', function(err,result){
			// if(err)throw err;
			if (err){
				console.log(err);
				return;
			};
				cb(result);
			});

	},

	
	update: function(tableInput, condition, cb) {
		connection.query('UPDATE '+tableInput+ ' SET devoured=true WHERE id='
			+condition+';', function(err, result){
				// if(err)throw err;
				if (err){
				console.log(err);
				return;
			};
				cb(result);
			});
	}
}



module.exports = orm;