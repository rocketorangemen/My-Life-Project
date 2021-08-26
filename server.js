var http = require('http');

var server =http.createServer(function(req,res) {
    res.writeHead(200, { "Content-type": "text/plain"});
});

server.listen(3001, function () {
    console.log('Server running!')
});