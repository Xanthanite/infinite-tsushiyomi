var express 						= require('express'),
	mongoose 							= require('mongoose'),
	app 									= express(),
	passport 							= require('passport'),
	bodyParser 						= require('body-parser'),
	User									= require('./models/user'),
	favicon								= require('serve-favicon'),
	LocalStrategy					= require('passport-local'),
	passportLocalMongoose	= require('passport-local-mongoose');

mongoose.set("useNewUrlParser", true);

mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/infinite_tsushiyomi")

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(favicon(__dirname + '/public/pictures/favicon.ico'));

app.use(express.static(__dirname + "/public"))

																	///////////////
																	////ROUTES////
                                  //////////////
                         
app.get("/", function(req, res) {
      res.render("home");
})

app.get("/about", function(req, res) {
  res.render("about");
})

app.get("/reserve", function(req, res) {
  res.render("reserve");
})

app.get("/menu", function(req, res) {
  res.render("menu");
})





















app.listen("3000", function() {
  console.log("Connected to app!");
})