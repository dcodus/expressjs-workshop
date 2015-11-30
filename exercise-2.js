var express = require("express");
var app = express();


app.get('/hello/:firstName', function(req, res){
    
    res.send("<h1>Hello " + req.params.firstName + " !</h1>")
})

app.listen(process.env.PORT, function(){
    console.log("Server initialized. Listening on port " + process.env.PORT)
})