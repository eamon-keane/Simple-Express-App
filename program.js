var book = require ("./lib/grades").book;

// node will know where to find this 
var express = require("express");

// create instance of express to be used in the web app
var app = express();


app.get("/", function(req, res){

    res.send ("Hello, World!");
});

app.get("/grade", function(req,res){

var grades = req.query.grades.split(",");

for(var i=0;i<grades.length;i++){

    book.addGrade(parseInt(grades[i]))
}

var average = book.getAverage();
var letter = book.getLetterGrade();

res.send("Your average is "+average+ " and your grade is "+ letter);

})

app.listen(3000);

console.log("Server ready....");

