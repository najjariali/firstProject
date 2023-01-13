const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended : true}))

//routes
app.get("/bmicalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})


app.get("/", function(req, res){
    res.json({
        "id":"12hhje8773", 
        "name":"ouhna elhassan",
    })
})

app.post("/bmicalculator", function(req, res){

    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var BMI = weight / height * height ;
    res.send("You bmi is " + BMI);
})

app.listen(8080, function(){
    console.log("server is listening on port 8080...");
})
