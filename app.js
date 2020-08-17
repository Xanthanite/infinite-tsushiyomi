var express 						= require('express'),
	mongoose 							= require('mongoose'),
	app 									= express(),
	passport 							= require('passport'),
	bodyParser 						= require('body-parser'),
	User									= require('./models/user'),
	LocalStrategy					= require('passport-local'),
	passportLocalMongoose	= require('passport-local-mongoose'),
	request 							= require('request');

mongoose.set("useNewUrlParser", true);

mongoose.set('useUnifiedTopology', true);

mongoose.connect("mongodb://localhost/infinite_tsushiyomi")

app.use(bodyParser.urlencoded({extended:true}));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"))

																	///////////////
																	////ROUTES////
                                  //////////////
                         
app.get("/", function(req, res) {
      res.render("home");
})





















app.listen("3000", function() {
  console.log("Connected to app!");
})