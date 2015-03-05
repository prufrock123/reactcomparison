var express = require('express');

// create teh express app
var app = express();

app.use(express.static('./'));

app.listen(7001);
console.log('Web server listening on port 7001');