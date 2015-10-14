var http = require('http');

var requests = 0;

var server = http.createServer(function (req, res) {
	console.log('got request = ' + ++requests);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('request (' + requests + ')');
});
console.log('success http server running');
server.listen(80);