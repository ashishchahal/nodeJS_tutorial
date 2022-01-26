const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  console.log("req, res", req.url);
  if (req.url == "/") {
    res.status = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else if (req.url == "/about") {
    res.status = 200;
    res.end("<h1>conditional #2</h1>");
  } else if (req.url === "/hello") {
    res.status = 200;
    res.end("<h1> This is conditional html</h1>");
  } else {
    res.statusCode = 404;
    res.end("<h1>Server not found!! Error</h1>");
  }
  // res.statusCode = 500;
  // res.setHeader("Content-Type", "text/html");
  // res.end("<h1>This is the header in the server</h1>");
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
