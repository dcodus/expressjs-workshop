/*
Create a web server that will respond to requests for /entry/search followed by a query string. In this case, the endpoint is static, and the query string is handled separately. The query string is of the form ?param1=value&param2=value.... It helps to parametrize a request to receive a different output, and the parameters/values are completely arbitrary. The param/value pairs are separated by a &, and each pair uses = between the param name and value. ExpressJS automatically parses the query string from the full URL, and makes it available to you as the query property of the HTTP Request object. If not, you would have to parse the query string manually inside of your request handler. This will give you back the query string as a simple JavaScript object. For example if the user requested /entry/search?firstName=john&lastName=smith, then you will have an object with {firstName: "john", lastName: "smith}.

Using the input from the user, search through the entries and return an array of matching entries. Treat each query string parameter as an OR. In the example above, return all the entries where the first name contains “john” OR the last name contains "smith". For emails, go thru all the emails and if one of them matches then you can return that entry.
*/

//?firstName=john&lastName=smith The query

//?email=smith

var express = require("express");
var app = express();


var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    emails: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
    ]
  }, 
  2: {
    firstName: "Scooby",
    lastName: "Doo",
    emails: [
      {type: "home", address: "scoobsman@mooby.com"},
      {type: "work", address: "scoobydoo@mail.com"}
    ]
  },
};

app.get('/entry/search', function(req, res){
    var matches = [];
    
    if(req.query.firstName){
        for(var prop in entries){
            if((entries[prop].firstName).toLowerCase() === (req.query.firstName).toLowerCase() || (entries[prop].lastName).toLowerCase() === (req.query.lastName).toLowerCase()){
                matches.push(entries[prop]);
            }
        }
    } else if (req.query.email){
        for(var prop in entries){
            entries[prop].emails.forEach(function(email){
                if(email.address.indexOf(req.query.email) > -1){
                    res.json(entries[prop])
                }
            })
        }
    } else {
        res.status(404).send();
    }
    
    res.json(matches);
    
    
    
})











app.listen(process.env.PORT, function(){
    console.log("Server initialized. Listening on port " + process.env.PORT);
})