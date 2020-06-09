var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//mongoose.set("useFindAndModify", false);
//var data = [{item: "make bed"}, {item: "shopping"}, {item: "work"}];
var urlencodedParser = bodyParser.urlencoded({extended: false});

//Connecting to the database
mongoose.connect("mongodb+srv://mustafa:wasif@cluster0-aawk0.mongodb.net/test?retryWrites=true&w=majority", 
    {useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true
    });
var db = mongoose.connection;
//Creating a Schema
var todoSchema = new mongoose.Schema({
    item: String
});
//Creating a model
var TodoModel = mongoose.model("Todo", todoSchema);
module.exports = function(app){

    
    app.get("/", function(req, res){
        TodoModel.find({}, function(err, data){
            if (err) throw err;
            res.render("todo", {todo: data});
        })
        
    });

    app.post("/", urlencodedParser, function(req, res){
        //console.log(req.body);
        var newTodoItem = TodoModel(req.body).save(function(err, data){
            if (err) throw err;
            res.json(data);
        });
        
    });

    app.delete("/:dashed_item", function(req, res){
        TodoModel.find({item: req.params.dashed_item.replace(/\-/g, " ")}).deleteOne(function(err, data){
            if (err) throw err;
            res.json(data);
        });
        /*data = data.filter(function(todo){
            return (todo.item.replace(/ /g, "-") !== req.params.dashed_item);
            
        });
        res.json(data);*/
    });
};