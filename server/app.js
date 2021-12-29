const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  let path;
  switch (url) {
    case '/':
      res.statusCode = 200;
      path = 'client/index.html';
      break;
    case '/about':
      res.statusCode = 200;
      path = 'client/about.html';
      break;
    case '/contact-me':
      res.statusCode = 200;
      path = 'client/contact-me.html';
      break;
    default:
      res.statusCode = 404;
      path = 'client/404.html';
  }

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
