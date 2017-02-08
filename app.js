var http = require('http')
var port = process.env.port || 1337;

var app = http.createServer(function requestListener(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf8' });
  res.end('A simple microblog website with no frills nor nonsense.')
});

app.listen(port)

console.log("Listening on http://localhost:" + port)
