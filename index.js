/*var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hello world");
 });
 
 app.listen(3000, function(){
    console.log("Example is running on port 3000");
 });
 */
/*var express = require("express");
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
 */


/*var express = require("express");
var app = express();

var Square = require("./module");

app.use(express.static("public"));

app.get("/", function(req, res){
  res.redirect("index.html");
});

app.listen(3000, function(){
  console.log("Example is running on port 3000");
});*/



/*var Square = require("./module");
var mySquareObject = new Square(5);

function main() {
   console.log(mySquareObject.getArea());
}
main();*/

/*var fs = require('fs');

function main(){
   var file  = "hello.txt";
   fs.appendFileSync(file, "Hello world\n");
}
main();*/

/*var fs = require('fs');
var dummyText = "Apple yep";

function main() {
    fs.writeFileSync("dummytext.txt", dummyText);
    var text = fs.readFileSync("dummytext.txt").toString();
    console.log(dummyText == text);
    console.log(text);
    fs.writeFileSync("undummytext.txt",
        text.replace("Apple", "Microsoft")
    );
}
main();
*/

var obj =
{
    "first_name": "Karen",
    "last_name": "Avetisyan",
    "age": 13,
    "tumo_student": true
}

var fs = require('fs');
var myJSON = JSON.stringify(obj);

function main(){
   var file  = "obj.json";
   fs.appendFileSync(file, myJSON);
}
main();

