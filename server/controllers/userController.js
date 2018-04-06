const User = require('../models/users');
const jwt = require('jsonwebtoken');

module.exports = {
  signInFb : function(req, res){
    console.log(req.body.email);
      let logged_user =
      {
        email: req.body.email,
        name: req.body.name,
        password: null
      }

      User.findOne({ email: logged_user.email })
      .then((user)=>{
        let token = jwt.sign({ email: logged_user.email, name: logged_user.name }, process.env.SECRET);
        if(user){
          res.status(200).json({
            message:'Login succeed',
            token : token,
            status: 'login'
          });
        } else {
          User.create(logged_user).
          then((user)=>{
            res.status(200).json({
              message:'User is registered',
              token : token,
              status: 'register'
            });
          })
        }

      })
      .catch((err)=>{
        res.status(500).json({
          message:'Server error',
          err: err
        });
      });
  },

  register: function(req, res){
    let register_user =
      {
        email: req.body.email,
        name: req.body.name,
        password: req.body.password
      }

      User.findOne({ email: register_user.email })
      .then((user)=>{
        if(user){
          res.status(400).json({
            message:'Email already registered, use another email',
            already_registered: 'true'
          });
        } else {
          User.create(register_user).
          then((user)=>{
            res.status(200).json({
              message:'User successfuly registered',
              already_registered: 'false'
            });
          });
        }

      })
      .catch((err)=>{
        res.status(500).json({
          message:'Server error',
          err: err
        });
      });
  },

  signIn: function(req, res){
    let logged_user =
      {
        email: req.body.email,
        password: req.body.password
      }

      User.findOne({ email: logged_user.email, password: logged_user.password })
      .then((user)=>{
        let token = jwt.sign({ email: user.email, name: user.name }, process.env.SECRET);
        if(user){
          res.status(200).json({
            message:'Succeed login',
            token : token,
            status: 'success'
          });
        } else {
          res.status(400).json({
            message:'Email/password is invalid',
            status: 'fail'
          });
        }

      })
      .catch((err)=>{
        res.status(500).json({
          message:'Server error',
          err: err
        });
      });
  },

  delete: function(req, res){
    let deleted_user =
      {
        email: req.body.email
      }

      User.deleteOne({ email: deleted_user.email })
      .then((respone)=>{
        res.status(200).json({
          message:'delete user',
          respone:respone
        });

      })
      .catch((err)=>{
        res.status(500).json({
          message:'Server error',
          err: err
        });
      });
  }
};
