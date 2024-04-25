const express = require("express");
const app = express();

app.get("/", function (req, res) {
  var friends = ["Akshay ", "Prasad ", "Yuvraj", " prashant", "Ganesh", "shubham"];
  var users = [
    { "name": "ABCD", "Mobile": "9322840966" },
    { "name": "pqrs", "Mobile":"97676436787"} 
    
  ];
  var data = {
    "name": "bhushan",
    "address": "sakegaon",
    "friends": friends,
    "users":users
  };
  res.render("home_page.ejs", data);
});

app.listen(1000);

//npm i express
//npm i ejs
//code.
//nodemon index.js
//backEnd => request  => Database  Save
//BackEnd => Database  Data =>  Return Response
