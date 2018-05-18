var express = require('express');
var path = require('path');

var app = express();

// serve the compiled files from the dist folder
app.use(express.static(__dirname + '/dist'));

// all routes should yield to index.html (since it's a SPA)
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 8080, function() {
    console.log('Listening on port ' + process.env.PORT || '8080');
});