
/*
 * GET home page.
 */

exports.index = function(req, res){
	//res.render('index.ejs');
	res.render('index.ejs', { title: 'Puppet Master' });
};

