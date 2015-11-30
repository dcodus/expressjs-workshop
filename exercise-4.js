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
      firstName : "Scooby",
      lastName: "Doo",
      emails : [
      {type: "home", address: "scoobs@mail.com"},
      {type: "work", address: "scoobydoo@mail.com"}
    ]
  }
};


app.get('/entry/:entryId', function(req, res){
    if(entries[req.params.entryId]){
        res.json(entries[req.params.entryId])
    } else {
        res.status(404).send();
    }
})


app.listen(process.env.PORT, function() {
    console.log("Server initialized. Listening on port " + process.env.PORT)
})