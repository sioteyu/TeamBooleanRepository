
exports.list = function(req, res){
	console.log(req.query.search);
	res.render('result');
};