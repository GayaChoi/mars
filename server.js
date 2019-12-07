var http = require('http');
var app = require('./app');
var morgan = require('morgan'); 
var server = http.createServer(app);
/* var securePort = process.argv[2] || 8443;
var insecurePort = process.argv[3] || 8080; */

app.use(morgan('dev'));


/* require("greenlock-express")
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
    });
*/ 

if(process.env.NODE_ENV === 'production') {
    app.use((req, res, next) => {
      if (req.header('x-forwarded-proto') !== 'https')
        res.redirect(`https://${req.header('host')}${req.url}`)
      else
        next()
    })
  }
 
server.listen(process.env.PORT || 3000, function() {
    console.log("server success");
}); 