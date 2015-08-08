// app/routes.js

// grab the models we want
var Term = require('./models/term');
var Booking = require('./models/booking');

//JWT Secret

    module.exports = function(app,express) {

        // server routes ===========================================================
        // handle things like api call
        // authentication routes

        var router = express.Router();

        // middleware to use for all requests
        router.use(function(req, res, next) {
            // do logging
            // console.log(req);
            next(); // make sure we go to the next routes and don't stop here
        });

        router.route('/admin')

            .get(function(req,res){
                Admin.find(function(err,admins){
                    if(err)
                        return res.send(err);
                    res.send(admins);
                });
            })

            .post(function(req, res){
                var admin = new Admin();
                admin.name = req.body.name;
                admin.password = admin.generateHash(req.body.password);
                admin.save(function(err){
                    if(err)
                        return res.send(err);
                    res.send({'message':'Admin created!'})
                });
            });

        router.route('/admin/:admin_id')

            .delete(function(req,res){
                Admin.remove({
                    _id: req.params.admin_id
                }, function(err, admin) {
                    if (err)
                        res.send(err);
                    res.send({ message: 'Admin successfully deleted' });
                });
            });

        router.route('/agent')

            // this is to create a new agent
            .post(function(req, res){
                Agent.findOne({'name':req.body.name},function(err,oldAgent){
                    if(err)
                        return res.send(err);
                    if(oldAgent)
                        return res.send({error:'An agent with that name already exists!'});
                    var agent = new Agent();         
                    agent.name = req.body.name;  
                    agent.password = agent.generateHash(req.body.password);
                    agent.email = req.body.email;
                    // save the bear and check for errors
                    agent.save(function(err) {
                        if (err)
                            res.send(err);

                        res.json({ message: 'Agent created!', id: agent._id});
                    });
                });
            })

            // this is to get all the agents
            .get(function(req, res){
                // use mongoose to get all agents in the database
                Agent.find(function(err, agents) {

                    // if there is an error retrieving, send the error. 
                                    // nothing after res.send(err) will execute
                    if (err)
                        res.send(err);

                    res.json(agents); // return all agents in JSON format
                });
            });

        router.route('/campaign')

            // this is to create a new agent
            .post(function(req, res){
                Campaign.findOne({'name':req.body.name},function(err,oldCampaign){
                    if(err)
                        return res.send(err);
                    if(oldCampaign)
                        return res.send({'error':'Already a campaign name'});
                    var campaign = new Campaign();
                    campaign.name = req.body.name;
                    campaign.num_hours = req.body.num_hours;
                    campaign.price_per_hour = req.body.price_per_hour;
                    campaign.client = req.body.client;
                    campaign.save(function(err){
                        if(err)
                            return res.send(err);
                        return res.send({'message':'success','campaign':campaign});
                    });
                });
            })

            // this is to get all the agents
            .get(function(req, res){
                // use mongoose to get all agents in the database
                Campaign.find(function(err, campaign) {
                    if (err)
                        return res.send(err);
                    res.send(campaign); // return all agents in JSON format
                });
            })

            .delete(function(req,res){
                Campaign.remove(function(err,campaign){
                    if(err)
                        return res.send(err);
                    res.send({'message':'Campaigns deleted'});
                });
            });

        router.route('/agent/campaign')

            .put(function(req,res){
                Agent.findById(req.body.agent_id, function(err, agent) {
                    if (err)
                        return res.send(err);
                    if(!agent)
                        return res.send({'error':'No agent with id!'});
                    Campaign.findById(req.body.campaign_id, function(err,campaign){
                        if (err)
                            return res.send(err);
                        if(!campaign)
                            return res.send({'error':'No campaign with id!'});
                        agent.campaign = req.body.campaign_id;
                        agent.save(function(err){
                            if(err)
                                return res.send(err);
                            return res.send({'message':'Success! Campaign allocated!','agent':agent});
                        })
                    });
                });
            });

        router.route('/client')

            // this is to get all the clients
            .get(function(req, res){
                // use mongoose to get all clients in the database
                Client.find(function(err, clients) {
                    // if there is an error retrieving, send the error. 
                    // nothing after res.send(err) will execute
                    if (err)
                        res.send(err);

                    res.json(clients); // return all clients in JSON format
                });
            })

            // this is to get all the clients
            .post(function(req, res){
                var client = new Client();      // create a new instance of the Bear model
                client.name = req.body.name;  // set the bears name (comes from the request)
                client.password = client.generateHash(req.body.password);
                client.email = req.body.email;
                // save the bear and check for errors
                client.save(function(err) {
                    if (err)
                        res.send(err);

                    res.json({ message: 'Client created!', id: client._id});
                });
            });

        app.use(function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });

    };

