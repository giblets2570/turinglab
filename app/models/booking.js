// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our agent model
// module.exports allows us to pass this to other files when it is called

var bookingSchema = mongoose.Schema({
    start: Date,
    end: Date,
    count: Number,
    numChildren: Number,
    age: String,
    email: String,
    person: String,
    school: String,
    phone: String
});

module.exports = mongoose.model('Booking', bookingSchema);