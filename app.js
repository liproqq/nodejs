var express = require("express");
var bodyParser = require("body-parser");
var app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));

app.get("/", function(req, res){
  res.render("index");
});

app.get("/contact", function(req, res){
  console.log(req.query);
  res.render("contact", {qs: req.query});
});

app.post("/contact", urlencodedParser, function(req, res){
  console.log(req.body);
  res.render("contact-success", {data: req.body});
});

app.get("/profile/:name", function(req, res){
  var data = {age: 29, job: "ninja", hobbies: ["eating", "fighting", "fishing"]};
  res.render("profile", {person: req.params.name, data: data});
});



app.listen(3000);

/*var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req, res){
  console.log("request was made : " + req.url);
  if(req.url === "/home" || req.url === "/"){
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname+ "/index.html").pipe(res);
  } else if (req.url === "/contact"){
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname+ "/contact.html").pipe(res);
  } else if (req.url === "/api/ninjas"){
    var ninjas = [{name: "ryu", age: 29}, {name: "yoshi", age:32}];
    res.writeHead(200, {"Content-Type": "application/JSON"});
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(404, {"Content-Type": "text/html"});
    fs.createReadStream(__dirname+ "/404.html").pipe(res);
  }
});

server.listen(3000, "127.0.0.1");
console.log("yo dawgs, now listening to port 3000");
*/
