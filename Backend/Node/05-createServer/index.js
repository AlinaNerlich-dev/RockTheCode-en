const http = require("http");

const handleRequest = (request, response) => {
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end("<h1>Hello, World!<h1>");
};

const server = http.createServer(handleRequest);
server.listen(8080, () => {
  console.log("server listening on port 8080");
});
