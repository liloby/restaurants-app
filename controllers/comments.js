const Restaurant = require("../models/restaurant");

module.exports = {
    create,

  };

  function create(req, res) {
    Restaurant.findById(req.params.id, function(err, restaurant) {
        req.body.user = req.user._id
        req.body.userName = req.user.name
        req.body.userAvatar = req.user.avatar
        restaurant.comments.push(req.body)
        restaurant.comments.edited = false
        restaurant.save(function(err) {
            res.redirect(`/restaurants/${restaurant._id}`)
        })
    })
  }