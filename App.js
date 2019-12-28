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
app.listen(3000);
console.log("Listening to port 3000");