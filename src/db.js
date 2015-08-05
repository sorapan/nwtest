var exports = module.exports = {};

var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '1234',
  database : 'pi'
});

connection.query('SELECT * FROM user', function(err, results) {

	exports.hello = results[2].class;

});
