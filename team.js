var db = require('./db');
var promise = require('bluebird');

module.exports = {
	getAllTeam: getAllTeam // Get all teams from db
};

function getAllTeam() {
	var fn = function (res, rej) {
		db.team.find(function (err, result) {
			// TODO how about err ?
			res(result);
		});
	}
	return new promise(fn);
}