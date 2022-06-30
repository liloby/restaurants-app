var express = require('express');
var router = express.Router();
const profileCtrl = require('../controllers/profile')

router.get('/profile', profileCtrl.index)

module.exports = router;