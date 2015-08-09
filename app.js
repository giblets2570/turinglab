// module dependencies
var express        = require('express');
var app            = express();
var routes         = require('./routes');
var user           = require('./routes/user');
var http           = require('http').Server(app);
var path           = require('path');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');
var request        = require("request");

require('./app/routes')(app,express); // configure our routes

// --- MAILCHIMP ---

// set MailChimp API key here
var MailChimpAPI = require('mailchimp').MailChimpAPI;
var apiKey = 'b758090cf025ef2afce9be00eddd0340-us11';  // API key 
var listID = '0a2f1389f9';
// var  parentID = '44090c10ba'  // Parent List ID
  // , schoolID = '95285e5b3b'
  // , laberID = '11334e4c20';

// See Mailchimp Node Module - https://github.com/gomfunkel/node-mailchimp
try {
    var mcApi = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
} catch (error) {
    console.log(error.message);
}

// // --- SETUP ---

// app.configure(function(){
//     // set the port of our application
//     // process.env.PORT lets the port be set by Heroku
//     app.set('port', process.env.PORT || 3000);
//     // make express look in the public directory for assets (css/js/img)
//     app.set('views', __dirname + '/views');
//     app.set('view engine', 'ejs');
//     // app.use(express.favicon());
//     app.use(express.logger('dev'));
//     app.use(express.bodyParser());
//     app.use(express.methodOverride());
//     app.use(app.router);
//     app.use(express.static(path.join(__dirname, 'public')));
// });

// app.configure('development', function(){
//     app.use(express.errorHandler());
// });

// config files
var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080; 

// connect to our mongoDB database 
// (uncomment after you enter in your own credentials in config/db.js)
// mongoose.connect(db.url); 

// get all data/stuff of the body (POST) parameters
// parse application/json 
app.use(bodyParser.json()); 

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override')); 

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 


// REQUIRE EJS - To view html files directly
app.engine('html', require('ejs').renderFile);
//

// --- ROUTES ---
// set the home page route
app.get('/', function(req, res) {
    res.render('index.html', {
        pageName : 'Home'
    });
});

//app.get('/', routes.index);
//app.get('/users', user.list);

// Accept the Post from the Form on the Index page and use listSubscribe from API
// Turn the Double Optin off and send messages back

app.post('/subscribe', function(req, res){
    console.log(req);
    mcApi.listSubscribe({id: listID, email_address:req.body.email, double_optin: false}, 
      function (error, data) {
        if (error){
            console.log(error);
            res.send("<p class='error'>Something went wrong. Please try again.</p>");
        }
        else {
            console.log(data);
            res.send("<p class='success'>Thanks for signing up!</p>");
        }
    })
});

// start app ===============================================
// startup our app at http://localhost:8080
// app.listen(port);  
http.listen(port,function(){
    // shoutout to the user                     
    console.log('Magic happens on port ' + port);
});             

// expose app           
exports = module.exports = app;     