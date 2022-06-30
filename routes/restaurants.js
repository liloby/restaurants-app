var express = require('express');
var router = express.Router();
const restaurantsCtrl = require('../controllers/restaurants')

router.get('/', restaurantsCtrl.index)
// GET /restaurants/new
router.get('/new', restaurantsCtrl.new)
//Get /restaurants/:id
router.get('/:id', restaurantsCtrl.show)
// POST /restaurants
router.post('/', restaurantsCtrl.create)
// Delete /restaurants/:id
router.delete('/:id', restaurantsCtrl.delete)



module.exports = router;
