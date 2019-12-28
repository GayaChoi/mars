var http = require('http');
var app = require('./app');
var server = http.createServer(app);

// heroku PORT + localhost
server.listen(process.env.PORT || 3000 ,function() {
    console.log("Server is success!")
});