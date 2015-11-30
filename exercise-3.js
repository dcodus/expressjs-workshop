var express = require("express");
var app = express();


app.get('/op/:operation/:number1/:number2', function(req, res) {

    var answer;

    if (req.params.operation === 'add') {
        answer = Number(req.params.number1) + Number(req.params.number2);
        res.send(answer.toString());
    }
    else if (req.params.operation === 'sub') {
        answer = Number(req.params.number1) - Number(req.params.number2);
        res.send(answer.toString());
    }
    else if (req.params.operation === 'mult') {
        answer = Number(req.params.number1) * Number(req.params.number2);
        res.send(answer.toString());
    }
    else if (req.params.operation === 'div') {
        answer = Number(req.params.number1) / Number(req.params.number2);
        res.send(answer.toString());
    }

})

app.listen(process.env.PORT, function() {
    console.log("Server initialized. Listening on port " + process.env.PORT)
})