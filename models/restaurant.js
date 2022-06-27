const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const restaurantSchema = new Schema({
    Name: String,
    Location: String,
    Rating: Number
})

// Compile the Schema into a model and export it
module.exports = mongoose.model('Restaurant', restaurantSchema)