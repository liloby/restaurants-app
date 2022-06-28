const Restaurant = require("../models/restaurant");

module.exports = {
  new: newRestaurant,
  create,
  index,
  show,
  delete: deleteRestaurant
};

function newRestaurant(req, res) {
  res.render("restaurants/new", { title: "Share Restaurant" });
}

function create(req, res) {
    //saves the user info
  req.body.user = req.user._id;
  req.body.userName = req.user.name;
  req.body.userAvatar = req.user.avatar;

  const restaurant = new Restaurant(req.body);
  restaurant.save(function (err) {
    if (err) return res.redirect("/restaurants/new");
    console.log(restaurant);
    res.redirect("/restaurants");
  });
}

function index(req, res) {
  Restaurant.find({}, function (err, restaurants) {
    res.render("restaurants/index", { title: "All Restaurants", restaurants });
  });
}

function show(req, res) {
  Restaurant.findById(req.params.id, function (err, restaurant) {
    console.log(req.user)
    res.render("restaurants/show", { title: `${restaurant.name}`, restaurant });
  });
}

async function deleteRestaurant(req, res, next) {
  try {
    const restaurant = await Restaurant.findOne({'restaurants._id': req.params.id, 'restaurants.user': req.user._id})
    if (!restaurant) return res.redirect(`/restaurants`)
    restaurant.remove(req.params.id)
    await restaurant.save()
    res.redirect('/restaurants')
  } catch(err) {
    console.log(err)
    return next(err)
  }
}