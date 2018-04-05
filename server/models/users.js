const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author:String,
  Category: String,
  stock: Number
},{
  timestamps: true
})

let user = mongoose.model('user', userSchema)

module.exports = user;
