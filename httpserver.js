const http = require("http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log("req, res", req.url);
  res.statusCode = 500;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>This is the header in the server</h1>");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
