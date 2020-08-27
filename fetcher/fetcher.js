//  My_Server

const http = require('http');
let fs = require('fs');

const hostname = '192.168.8.123';
const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile('./covid.html', null, function (error, data) {
      if (error) {
          res.writeHead(404);
          res.write('Whoops! File not found!');
      } else {
          res.write(data);
      }
      res.end();
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
