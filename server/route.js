var express = require('express');
var router = express.Router();
var userService = require('./api/user')




router.put('/signUp',userService.signUp)
router.post('/login',userService.loginUser)


module.exports = router;