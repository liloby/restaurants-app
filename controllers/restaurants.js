const Restaurant = require("../models/restaurant");

module.exports = {
  new: newRestaurant,
  create,
  index,
  show,
  delete: deleteRestaurant,
  edit,
  update,
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
    res.redirect("/restaurants");
  });
}

function index(req, res) {
  Restaurant.find({}, function (err, restaurants) {
    res.render("restaurants/index", { title: "Our Favorites", restaurants });
  });
}

function show(req, res) {
  Restaurant.findById(req.params.id, function (err, restaurant) {
    res.render("restaurants/show", { title: `${restaurant.name}`, restaurant });
  });
}

function deleteRestaurant(req, res, next) {
  Restaurant.findById(req.params.id, function (err, restaurant) {
    restaurant.remove();
    restaurant.save(function (err) {
      res.redirect("/restaurants");
    });
  });
}

function edit(req, res) {
  Restaurant.findById(req.params.id, function (err, restaurant) {
    res.render("restaurants/edit", { title: `${restaurant.name}`, restaurant });
  });
}

function update(req, res) {
  const id = req.params.id;
  Restaurant.findByIdAndUpdate(id, req.body, function (err, restaurant) {
    restaurant.save(function (err) {
      res.redirect(`/restaurants/${req.params.id}`);
    });
  });
}
