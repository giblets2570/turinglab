// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our agent model
// module.exports allows us to pass this to other files when it is called

var bookingSchema = mongoose.Schema({
    type: String,
    start: Date,
    end: Date,
    count: Number,
    numChildren: Number,
    age: String,
    email: String,
    person: {
      type: String, 
      default: ''
    },
    school: String,
    phone: {
      type: String, 
      default: ''
    },
});

module.exports = mongoose.model('Booking', bookingSchema);