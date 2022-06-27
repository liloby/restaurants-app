const Restaurant = require('../models/restaurant')

module.exports = {
    new: newRestaurant,
    create,
    index,
    show
}

function newRestaurant(req, res) {
    res.render('restaurants/new', {title: 'Share Restaurant'})
}

function create(req, res) {
    const restaurant = new Restaurant(req.body)
    restaurant.save(function(err) {
        if (err) return res.redirect('/restaurants/new')
        console.log(restaurant)
        res.redirect('/restaurants')
    })
}

function index(req, res) {
    Restaurant.find({}, function(err, restaurants) {
        res.render('restaurants/index', {title: 'All Restaurants', restaurants})
    })
}

function show(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {

        res.render('restaurants/show', {title: `${restaurant.name}`, restaurant})
    }) 
    }
