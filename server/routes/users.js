var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController');

router.post('/signinFb', userController.signInFb);
router.post('/register', userController.register);
router.post('/signin', userController.signIn);
router.delete('/delete', userController.delete);

module.exports = router;
