var express 						= require('express'),
	mongoose 							= require('mongoose'),
	app 									= express(),
	passport 							= require('passport'),
	bodyParser 						= require('body-parser'),
	User									= require('./models/user'),
	Reservation						= require('./models/reservation'),
	favicon								= require('serve-favicon'),
	LocalStrategy					= require('passport-local'),
	Message								= require('./models/message'),
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

app.post("/contact", (req, res) => {
	Message.create(req.body.message, (err, message) => {
		if(err) {
			console.log("Couldn't send message, sorry!")
		}else {
			message.save();
			res.status(204).send()
		}
	})
})

app.post("/reserve", (req, res) => {
	Reservation.create(req.body.reservation, (err, reservation) => {
		if(err) {
			console.log("Couldn't make reservation, sorry!")
		}else {
			reservation.save();
			res.status(204).send()
		}
	})
})




















app.listen("3000", function() {
  console.log("Connected to app!");
})