const mongoose = require("mongoose");

const gigsSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
  },
  venue: { 
    type: String, 
    required: true
  },
  date: { 
    type: String, 
    required: true      //Calendar pop up feature
  },
  callTime: { 
    type: String, 
    required: true
  },
  agenda: { 
    type: String, 
    required: false
  },
  extraDeets: {
     type: String, 
     required: false
  },
  privacy: {
    type: String,
    enum: ['private', 'public'],
    required: true
  }
});

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  gigs: [gigsSchema]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
