const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  email: String,
  username: String,
  password:String
  
},{
  timestamps: true
});

let User = mongoose.model('User', userSchema)

module.exports = User;
