/*var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello world");
 });
 
 app.listen(3000, function(){
    console.log("Example is running on port 3000");
 });
 */
var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("<h1>Hello world</h1>");
});
app.get("/:google/:shearch", function(req, res){
    var m = req.params.shearch;
    res.redirect('http://google.com/search?q= ' + m);
});

app.get("/:name/:sname",function(req, res){
    var n = req.params.name;
    var k = req.params.sname;
    res.send("<h1>Hello"+ n + " " + k + "</h1");
});

app.get("/:google/", function(req, res){
    res.redirect('http://google.com')
});

app.get("/*", function(req, res){
    res.sendStatus(404);
});

app.listen(3000, function(){
    console.log("Example is running on port 3000");
 });
 