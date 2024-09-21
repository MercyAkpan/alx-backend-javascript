/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
// eslint-disable-next-line no-undef
const http = require("http");

if (require.main === module) {
  // Your code to start the server
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  });
  server.listen(1245);
}
