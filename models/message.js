var mongoose = require("mongoose"),

MessageSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phonenumber: String,
  email: String,
  message: String,
})


module.exports = mongoose.model("Message", MessageSchema);