const mongoose = require("mongoose");

const gigsSchema = new mongoose.Schema({
  type: {
    type: String, 
    required: true
  },
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
  agenda: String,
  extraDeets: String,
  privacy: {
    type: String,
    enum: ['private', 'public'],
    required: true
  },
  status: {
    type: String,
    enum: ['upcoming', 'previous', 'pending'],
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
