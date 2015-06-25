// module dependencies
var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express()

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

// --- SETUP ---

app.configure(function(){
    // set the port of our application
    // process.env.PORT lets the port be set by Heroku
    app.set('port', process.env.PORT || 3000);
    // make express look in the public directory for assets (css/js/img)
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    // app.use(express.favicon());
    app.use(express.logger('dev'));
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
    app.use(express.errorHandler());
});

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



http.createServer(app).listen(app.get('port'), function() {
    console.log('Our app is running on http://localhost: ' + app.get('port'));
});
