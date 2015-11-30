/*
So far, everything we have done has been thru GET requests (app.get(...)). This exercise will make you do a POST request instead. The goal of this exercise is to enable web users to ADD entries to our address book. Contrary to the more common GET requests, you can’t easily make a browser do a POST. One of the ways would be building an HTML form, but here we will do something more APIy :)

Using Chrome, install the Advanced REST Client extension. Using it, you’ll be able to make POST requests easily.

Using app.post, create an endpoint that listens to POST requests to /entry. As a first step, inside your request handler, do a console.log(req.body).

Then, using the “Form” method of the Advanced REST Client, try to send a POST to your server and look at your console. Notice that your server receives a list of key/value pairs. While we could use these values to get our job done, since we’re in JavaScript land we’d rather receive some JSON instead.

In another step, use the “Raw” method of the Advanced REST Client, and send a POST to your server with some JSON in it, like this:

{"firstName": "New", "lastName": "Entry"}
Notice that your server receives a string of JSON. You now know that you can parse this string using JSON.parse in order to get back a nice JavaScript object.

Now, after doing any validation you like, add the provided entry to your address book, giving it a unique ID. Make sure that in your response to the user, you give them back the entry they provided along with the ID you have created for it.
*/

var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());

var addressBook = {};

var nextId = 1;

app.post('/entry', function(req, res){
    req.body.id = nextId;
    nextId++;
    addressBook[Number(req.body.id)] = req.body;
    console.log(addressBook);
})


app.get('/entry/:id', function(req, res){
    console.log(req.params);
   if(addressBook[req.params.id]){
       res.json(addressBook[req.params.id])
   } else {
       res.status(404).send();
   }
})



app.listen(process.env.PORT, function(){
    console.log("Server initialized. Listening on port " + process.env.PORT);
})