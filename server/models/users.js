const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  email: String,
  name: String,
  password:String
  
},{
  timestamps: true
});

let User = mongoose.model('User', userSchema)

module.exports = User;
