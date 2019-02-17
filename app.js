var express = require('express');
var app = express();
const path = require('path');
var cors = require('cors');

app.use(cors());

app.use("/lib", express.static(__dirname + '/lib'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(9001, function () {
  console.log('Example app listening on port 9001!');
});