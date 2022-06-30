var express = require('express');
var router = express.Router();
const profileCtrl = require('../controllers/profile')
const isLoggedIn = require('../config/auth');

router.get('/profile', isLoggedIn, profileCtrl.index)

module.exports = router;