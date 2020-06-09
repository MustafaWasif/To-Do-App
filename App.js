var todoController = require("./controllers/todoController");
var express = require("express");
var app = express();

//Set up the view engine
app.set("view engine", "ejs");

//Calling the todoController function
todoController(app);

//Static files
app.use(express.static("./public"));



//Listen to a port
app.listen(process.env.PORT || 8080);
console.log("To-do app running");