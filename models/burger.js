var dao = require("../config/dao.js");

var burger = {
	getAll: function(cb) {
		dao.getAll(function(res){
			cb(res);
		});
	},

	createBurger: function(cols, vals, cd) {
		dao.createBurger(cols, vals, function(res){
			cd(res);
		});
	},

	updateBurger: function(objColVals, condition, cb) {
		dao.updateBurger(objColVals, condition, function(res){
			cd(res);
		});
	},

	deleteBurger: function(condition, cb) {
		dao.deleteBurger(condition, function(res){
			cd(res);
		});
	}
};

module.exports = burger;