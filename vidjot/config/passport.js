const localStrategy = require("passport-local").Strategy;
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Load User model
const User = mongoose.model("users");

module.exports = function(passport){
  passport.use(new localStrategy({usernameField: "email"}, (email, password, done) => {
    console.log(password);
  }));
}