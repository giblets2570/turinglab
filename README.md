# Turing Lab Website

This is a repo to contain the first website, primarily for marketing purposes for Turing Lab and collection of mailing list.

## Installation
1. Download the repository
2. Install npm modules: `npm install`
3. Start up the server: `node app.js`
5. View in browser at http://localhost:3000

## TODO
1. Push to heroku (having problems)
2. Link heroku to 'www.turinglab.co.uk'

## NOTE on mailChimp
This website is connected to three lists on mailchimp, we can access them using the password saved in drive!


## AWS server instance
To ssh into aws server instance:
  1. get private key (from gdocs)
  2. move private key into your .ssh directory ```mv path/to/downloadedkey.pem ~/.ssh/```
  3. change ownership to only you ```chmod -R 700 ~/.ssh/downloadedkey.pem```
  4. ssh into server. Username:ubuntu ```ssh -i ~/.ssh/downloadedkey.pem ubuntu@ec2-52-27-120-46.us-west-2.compute.amazonaws.com```

NB - you can find computername to ssh to on aws [console](https://us-west-2.console.aws.amazon.com) and clicking on the instances tab


