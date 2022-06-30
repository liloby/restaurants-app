var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments')
const isLoggedIn = require('../config/auth');

router.post('/restaurants/:id/comments', isLoggedIn, commentsCtrl.create)

module.exports = router