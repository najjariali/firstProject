const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : true}))

app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function(req, res){

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var BMI = weight / height * height ;
    res.send("You bmi is " + BMI);
})


app.listen(3000, function(){
    console.log("server is listening on port 3000...");
})
