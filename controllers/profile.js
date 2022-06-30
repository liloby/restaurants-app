const Restaurant = require("../models/restaurant");
const User = require("../models/user");

module.exports = {
    index,
}

function index(req, res) {
    Restaurant.find({}, function (err, restaurants) {
        console.log(restaurants)
        res.render("profile/index", { title: "My Profile", restaurants });
      });
}