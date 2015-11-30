var express = require("express");
var app = express();

function calculate(operation, num1, num2) {
    var answer = {
        operation: operation,
        firstOperand: num1,
        secondOperand: num2,
    };

    if (operation === 'add') {
        answer.solution = (num1) + (num2);
    }
    else if (operation === 'sub') {
        answer.solution = (num1) - (num2);
    }
    else if (operation === 'mult') {
        answer.solution = (num1) * (num2);
    }
    else if (operation === 'div') {
        answer.solution = (num1) / (num2);
    }
    return answer;
}




app.get('/op/:operation/:number1/:number2', function(req, res) {

 
 if(req.params.operation === 'add' || req.params.operation === 'sub' || req.params.operation === 'mult' || req.params.operation === 'div'){
      var result = calculate(req.params.operation, Number(req.params.number1), Number(req.params.number2));
      res.json(result);
 } else {
     res.status(404).send();
 }


})

app.listen(process.env.PORT, function() {
    console.log("Server initialized. Listening on port " + process.env.PORT)
})