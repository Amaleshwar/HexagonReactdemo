var express = require("express");
var app = express();

var cors = require("cors");
app.use(cors());

app.get("/getemp", function (req, res) {
  var emp = [
    { empname: "Amaleshwar", id: "101", age: 25, address: "Hyderabad" },
    { empname: "CHANDRAN Nithin", id: "102", age: 23, address: "Hyderabad" },
    { empname: "Shashank", id: "103", age: 25, address: "Hyderabad" },
    { empname: "Mohan Krishna", id: "104", age: 25, address: "Hyderabad" },
  ];
  // res.sendStatus();
  res.send(emp);
});

app.listen(8000, function () {
  console.log("started");
});
