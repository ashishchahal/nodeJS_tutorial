const path = require("path");

const a = path.basename("C:\\temp\\myfile.html");
const b = path.posix.basename("C://temp/myfile.html");
const c = path.dirname("C://temp//myfile.html");
const d = path.extname("C:\\temp\\myfile.html");

console.log("path basename:", a, "posix:", b);
console.log("dirname", c);
console.log("extension name:", d, __filename);
