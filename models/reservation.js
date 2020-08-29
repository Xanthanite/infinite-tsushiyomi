var mongoose = require("mongoose"),

ReservationSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phonenumber: String,
  email: String,
  date: String,
})


module.exports = mongoose.model("Reservation", ReservationSchema);