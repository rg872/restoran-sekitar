const User = require('../models/users');
const jwt = require('jsonwebtoken');

module.exports = {
  signIn : function(req, res){
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
            message:'login berhasil',
            token : token,
            status: 'login'
          });
        } else {
          User.create(logged_user).
          then((user)=>{
            res.status(200).json({
              message:'user berhasil terdaftar',
              token : token,
              status: 'register'
            });
          })          
        }
        
      })
      .catch((err)=>{
        res.status(500).json({
          message:'server error',
          err: err
        });
      });
  }
};
