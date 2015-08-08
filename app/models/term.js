// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');

// define our agent model
// module.exports allows us to pass this to other files when it is called

var termSchema = mongoose.Schema({
    start: Date,
    end: Date,
    name: String,
    monday:{
    	morning: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    },
	    afternoon: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    }
    },
    tuesday:{
    	morning: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    },
	    afternoon: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    }
    },
    wednesday:{
    	morning: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    },
	    afternoon: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    }
    },
    thursday:{
    	morning: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    },
	    afternoon: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    }
    },
    friday:{
    	morning: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    },
	    afternoon: { 
	        type: mongoose.Schema.ObjectId, 
	        ref: 'Booking' 
	    }
    }
});

module.exports = mongoose.model('Term', termSchema);