const mongoose = require('mongoose')
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema

const commentSchema = new Schema({
    content: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String,
    edited: Boolean
}, {
    timestamps: true
})

const restaurantSchema = new Schema({
    name: String,
    location: String,
    rating: Number,
    review: String,
    image: String,
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    userName: String,
    userAvatar: String,
    comments: [commentSchema]
}, {
    timestamps: true
})

// Compile the Schema into a model and export it
module.exports = mongoose.model('Restaurant', restaurantSchema)