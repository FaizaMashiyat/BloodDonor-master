
exports.enter = function(req, res, next){
	res.render('index');
};

exports.about = function(req, res, next){
	res.render("about-us");
};

exports.service = function(req, res, next){
	res.render("services");
};

exports.news = function(req, res, next){
	res.render("blog");
};


exports.contact = function(req, res, next){
	res.render("contact");
};

exports.elements = function(req, res, next){
	res.render("elements");
};

exports.indexicons = function(req, res, next){
	res.render("index-icons");
};

exports.finddonor = function(req, res, next){
	res.render("finddonor");
};

exports.chat = function(req, res, next){
	res.render("chat");
};

exports.logout = function(req, res, next){
	res.render("logout");
};