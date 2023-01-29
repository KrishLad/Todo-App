//jshint esversion:7
const express = require("express"); 
const date = require(__dirname + "/date.js");
const app = express(); 
const port = 3000; 
app.set('view engine', 'ejs'); 
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
//Globals
var items = []; 
var workitems = [];
app.get("/", function(req,res){
   let day = date.getDate();
    res.render("list", {title:day, newitem: items}); //dictionary with keys as ejs variables and values as js variables
}); 

app.get("/work", function (req,res) {
   res.render("list", {title:"Work Related", newitem: workitems});
});

app.post("/",function (req, res) {

    if (req.body.list === "Work"){
        workitems.push(item);
        res.redirect("/work");
    } else{
        items.push(item);
        res.redirect("/");
    }


   var item = req.body.newItem;  
   items.push(item); 
   res.redirect("/"); 
});

app.post("/work",function (req, res) {
   let item = req.body.newItem;  
   items.push(item); 
   res.redirect("/work"); 
});

app.listen(port, function(){
    console.log("Server is running on port " + port); 
}); 