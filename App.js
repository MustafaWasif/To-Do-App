var express = require("express");
var todoController = require("./controllers/todoController");
var app = express();

//Set up the view engine
app.set("view engine", "ejs");

//Static files
app.use(express.static("./public"));

//Calling the todoController function
todoController(app);

//Listen to a port
app.listen(process.env.PORT, process.env.IP);
console.log("To-do App running");
