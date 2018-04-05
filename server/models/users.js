const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  email: String,
  username: String,
  password:String,
  photo: String
},{
  timestamps: true
})

let user = mongoose.model('user', userSchema)

module.exports = user;
