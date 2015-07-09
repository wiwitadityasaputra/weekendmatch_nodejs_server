var express = require('express');

var app = express();
app.listen(3000);

app.use('/', express.static('public'));

app.use('/api', require('./api'));