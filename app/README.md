# Turing Lab API

This contains the api routes and the mongodb models

## Routes
1. `/api/term`
	- GET - returns all the terms
	- POST - Adds a new term to the database

2. `/api/term/:term_id`
	- GET - returns the term with id term_id
	- PUT - adds a booking to a term
	- DELETE - Deletes a terms

3. `/api/term/:term_id/booking`
	- GET - returns the bookings for a term

4. `/api/booking`
	- GET - returns all the bookings
	- POST - Adds a new booking to the database

5. `/api/booking/:booking_id`
	- GET - returns the booking with id booking_id
	- DELETE - Deletes a booking