const User = require('../models/users');

module.exports = {
  signIn : function(req, res){
      let user = 
      {
        email: req.body.email,
        username: req.body.username,
        password: null,
        photo: req.body.photo
      }

      user.findOne({ emai: user.email })
      .then(user=>{
        console.log(test)
      })
      .catch(err=>{
        console.log(err)
      });
  }
};
