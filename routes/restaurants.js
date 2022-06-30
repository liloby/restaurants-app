var express = require('express');
var router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants')
const isLoggedIn = require('../config/auth');

router.get('/', restaurantsCtrl.index)
// GET /restaurants/new
router.get('/new', isLoggedIn, restaurantsCtrl.new)
//Get /restaurants/:id
router.get('/:id', restaurantsCtrl.show)
// POST /restaurants
router.post('/', isLoggedIn, restaurantsCtrl.create)
// Delete /restaurants/:id
router.delete('/:id', isLoggedIn, restaurantsCtrl.delete)
// Show the Edit page of /restaurants/:id
router.get('/:id/edit', isLoggedIn, restaurantsCtrl.edit)
// Edit the restaurant
router.put('/:id', isLoggedIn, restaurantsCtrl.update)

module.exports = router;
