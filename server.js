var http = require('http');
var app = require('./app');
var morgan = require('morgan'); 
var server = http.createServer(app);
/* var securePort = process.argv[2] || 8443;
var insecurePort = process.argv[3] || 8080;  */


app.use(morgan('combined'))
/*  
require("greenlock-express")
    .init(function() {
        return {
            greenlock: require("./greenlock.js"),
 
            // whether or not to run at cloudscale
            cluster: false
        };
    })
    .ready(function(glx) {
        var app = require("./app.js");
 
        // Serves on 80 and 443
        // Get's SSL certificates magically!
        glx.serveApp(app);
    }); */

 /* 
server.on('request', require('redirect-https')({
    port: securePort
  , body: '<!-- Hello! Please use HTTPS instead -->'
  , trustProxy: true // default is false
}));
       
server.listen(insecurePort, function () {
    console.log('Listening on http://localhost.pplwink.com:' + server.address().port);
}); */

server.listen(process.env.PORT || 3000);