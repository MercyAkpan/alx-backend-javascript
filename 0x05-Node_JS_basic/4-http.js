/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
const { createServer } = require("http");

// // Create the server
// const app = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello Holberton School!');
// });

// // Listen on port 1245
// app.listen(1245);

// // Export the app
// module.exports = app;

const http = require("http");

// Define a function to create and start the server
const startServer = () => {
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  });
  server.listen(1245);
};

// Start the server immediately
startServer();

// Export the function to allow other modules to use it
module.exports = startServer;
