// app/routes.js

// grab the models we want
var Term = require('./models/term');
var Booking = require('./models/booking');

module.exports = function(app,express) {

    // server routes ===========================================================
    // handle things like api calls

    var router = express.Router();

    // middleware to use for all requests
    router.use(function(req, res, next) {
        // do logging
        console.log("Request",req.body);
        next(); // make sure we go to the next routes and don't stop here
    });

    router.route('/term')

        .get(function(req,res){
            Term.find(function(err,terms){
                if(err)
                    return res.send(err);
                return res.send(terms);
            });
        })

        .post(function(req, res){

            var term = new Term();
            term.name = req.body.name;
            term.start = req.body.start;
            term.end = req.body.end;
            term.save(function(err){
                if(err)
                    return res.send(err);
                return res.send({'message':'Term created!','term':term})
            });
        });

    router.route('/term/:term_id')

        .delete(function(req,res){
            Term.remove({
                _id: req.params.term_id
            }, function(err, term) {
                if (err)
                    return res.send(err);
                return res.send({ message: 'Term successfully deleted' });
            });
        })

        .get(function(req,res){
            Term.findById(req.params.term_id,function(err,term){
                if(err)
                    return res.send(err);
                return res.send(term);
            });
        })

        .put(function(req,res){
        	Term.findById(req.params.term_id,function(err,term){
        		var day = req.body.day;
        		var time = req.body.time;
        		if(day=="monday"){
        			if(time == "morning"){
        				term.monday.morning.booked = true;
        			}else{
        				term.monday.afternoon.booked = true;
        			}
        		}else if(day=="tuesday"){
        			if(time == "morning"){
        				term.tuesday.morning.booked = true;
        			}else{
        				term.tuesday.afternoon.booked = true;
        			}
        		}else if(day=="wednesday"){
        			if(time == "morning"){
        				term.wednesday.morning.booked = true;
        			}else{
        				term.wednesday.afternoon.booked = true;
        			}
        		}else if(day=="thursday"){
        			if(time == "morning"){
        				term.thursday.morning.booked = true;
        			}else{
        				term.thursday.afternoon.booked = true;
        			}
        		}else{
        			if(time == "morning"){
        				term.friday.morning.booked = true;
        			}else{
        				term.friday.afternoon.booked = true;
        			}
        		}
        		term.save(function(err){
        			if(err)
        				return res.send(err);
        			return res.send({'message':'Slot booked'});
        		});
        	});
        });

    router.route('/term/:term_id/booking')

        .get(function(req,res){
            Term.findById(req.params.term_id,function(err,term){
                if(err)
                    return res.send(err);
                booking_ids = [];

                if(term.monday){
                    if(term.monday.morning){
                        if(term.monday.morning.booked)
                            booking_ids.push(term.monday.morning.ref);
                    }
                    if(term.monday.afternoon){
                        if(term.monday.afternoon.booked)
                            booking_ids.push(term.monday.afternoon.ref);
                    }
                }
                if(term.tuesday){
                    if(term.tuesday.morning){
                        if(term.tuesday.morning.booked)
                            booking_ids.push(term.tuesday.morning.ref);
                    }
                    if(term.tuesday.afternoon){
                        if(term.tuesday.afternoon.booked)
                            booking_ids.push(term.tuesday.afternoon.ref);
                    }
                }
                if(term.wednesday){
                    if(term.wednesday.morning){
                        if(term.wednesday.morning.booked)
                            booking_ids.push(term.wednesday.morning.ref);
                    }
                    if(term.wednesday.afternoon){
                        if(term.wednesday.afternoon.booked)
                            booking_ids.push(term.wednesday.afternoon.ref);
                    }
                }
                if(term.thursday){
                    if(term.thursday.morning){
                        if(term.thursday.morning.booked)
                            booking_ids.push(term.thursday.morning.ref);
                    }
                    if(term.thursday.afternoon){
                        if(term.thursday.afternoon.booked)
                            booking_ids.push(term.thursday.afternoon.ref);
                    }
                }
                if(term.friday){
                    if(term.friday.morning){
                        if(term.friday.morning.booked)
                            booking_ids.push(term.friday.morning.ref);
                    }
                    if(term.friday.afternoon){
                        if(term.friday.afternoon.booked)
                            booking_ids.push(term.friday.afternoon.ref);
                    }
                }
                if(term.saturday){
                    if(term.saturday.morning){
                        if(term.saturday.morning.booked)
                            booking_ids.push(term.saturday.morning.ref);
                    }
                    if(term.saturday.afternoon){
                        if(term.saturday.afternoon.booked)
                            booking_ids.push(term.saturday.afternoon.ref);
                    }
                }
                if(term.sunday){
                    if(term.sunday.morning){
                        if(term.sunday.morning.booked)
                            booking_ids.push(term.sunday.morning.ref);
                    }
                    if(term.sunday.afternoon){
                        if(term.sunday.afternoon.booked)
                            booking_ids.push(term.sunday.afternoon.ref);
                    }
                }

                Booking.find({_id: {$in: booking_ids}},function(err,bookings){
                    if(err)
                        return res.send(err);
                    return res.send(bookings);
                })

            });
        });

    router.route('/booking')

        // this is to create a new agent
        .post(function(req, res){
        	var booking = new Booking;
            booking.type  = req.type;
			booking.start  = req.start;
			booking.end = req.end;
			booking.count = req.count;
			booking.numChildren = req.numChildren;
			booking.age = req.age;
			booking.email = req.email;
			booking.person = req.person;
			booking.school = req.school;
			booking.phone = req.phone;

			booking.save(function(err){
				if(err)
					return res.send(err);
				return res.send({'message':'Booking created successfully','booking':booking})
			});
        })

        // this is to get all the bookings
        .get(function(req, res){
            Booking.find(function(err,bookings){
            	if(err)
            		return res.send(err);
            	return res.send(bookings);
            })
        });

    router.route('/booking/:booking_id')

    	.delete(function(req,res){
            Booking.remove({
                _id: req.params.booking_id
            }, function(err, booking) {
                if (err)
                    return res.send(err);
                return res.send({message: 'Booking successfully deleted' });
            });
        })

        // this is to get one booking
        .get(function(req, res){
            Booking.findById(req.params.booking_id,function(err,booking){
            	if(err)
            		return res.send(err);
            	return res.send(booking);
            });
        });

    // REGISTER OUR ROUTES -------------------------------
    // all of our API routes will be prefixed with /api
    app.use('/api', router);
};

