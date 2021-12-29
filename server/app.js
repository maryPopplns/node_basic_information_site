const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  let path;
  switch (url) {
    case '/':
      path = 'client/index.html';
      break;
    case '/about':
      path = 'client/about.html';
      break;
    case '/contact-me':
      path = 'client/contact-me.html';
      break;
    default:
      path = 'client/404.html';
  }

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
