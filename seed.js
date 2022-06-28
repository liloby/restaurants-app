require('dotenv').config();

// Connect to the db
require('./config/database')

const Restaurant = require('./models/restaurant')

// For better organization, the see data is being stored in a separate data.js module
const data = require('./data')


const p1 = Restaurant.deleteMany({})

Promise.all([p1])
.then(function(result) {
    console.log(result)
    return Promise.all([
        Restaurant.create(data.restaurants)
    ])
})
.then(function(result) {
    console.log(result)
})
.then(process.exit)