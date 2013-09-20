
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'blackzky',
  password : '1234',
  database: 'magic_list'
});

connection.connect();

exports.index = function(req, res){

	var sql = "SELECT * from magic_items LIMIT 0, 5";
	connection.query(sql, function(err, rows, fields) {
		if (err) throw err;
		var data = {};
		data.rows = rows;
		data.title = "Magic List";
		res.render("index.ejs", data);
	});

};

exports.add = function(req, res){
	res.render("add.ejs");
};

exports.add_item = function(req, res){
	var item = {item: req.body.item, value: (Math.random()*100)};
	var query = connection.query('INSERT INTO magic_items SET ?', item, function(err, result) {
		if (err) throw err;
		res.redirect("/");
	});
}
