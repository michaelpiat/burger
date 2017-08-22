var connection = require("../config/connection.js");

// Helper function for SQL syntax.
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
// Helper function for SQL syntax.
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}


var dao = {
	getAll: function(cb) {
		var querySt = "SELECT * FROM burgers";
		connection.query(querySt, function(err, res){
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	createBurger: function(cols, vals, cb) {
		var querySt = "INSERT INTO burgers (";

		querySt += cols.toString();
		querySt += ") ";
		querySt += "VALUES (";
		querySt += printQuestionMarks(vals.length);
		querySt += ") ";

		console.log(querySt);

		connection.query(querySt, vals, function(err, res){
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	updateBurger: function(objColVals, condition, cb) {
		var querySt = "UPDATE burgers SET ";

		querySt += objToSql(objColVals);
		querySt += " WHERE ";
		querySt += condition;

		console.log(querySt);

		connection.query(querySt, function(err, res){
			if (err) {
				throw err;
			}

			cb(res);
		});
	},

	deleteBurger: function(condition, cb){
		var querySt = "DELETE FROM burgers ";
		querySt += " WHERE ";
		querySt += condition;

		connection.query(querySt, function(err, res){
			if (err) {
				throw err;
			}

			cb(res);
		});
	}
};

module.exports = dao; 
