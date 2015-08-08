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
    		booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
    	},
	    afternoon: { 
	        booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
	    }
    },
    tuesday:{
    	morning: { 
	        booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
	    },
	    afternoon: { 
	        booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
	    }
    },
    wednesday:{
    	morning: { 
	        booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
	    },
	    afternoon: { 
	        booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
	    }
    },
    thursday:{
    	morning: { 
	        booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
	    },
	    afternoon: { 
	        booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
	    }
    },
    friday:{
    	morning: { 
	        booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
	    },
	    afternoon: { 
	        booked: {
    			type: Boolean, 
    			default: false
    		},
    		ref: {
    			type: mongoose.Schema.ObjectId, 
		        ref: 'Booking' 
		    }
	    }
    }
});

module.exports = mongoose.model('Term', termSchema);