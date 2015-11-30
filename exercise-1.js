var express = require("express");
var app = express();


app.get('/hello', function(req, res){
    res.send("<h1>Hello beautiful world</h1>")
})



app.listen(process.env.PORT, function(){
    console.log("Express initialized! Listening on port " + process.env.PORT)
});