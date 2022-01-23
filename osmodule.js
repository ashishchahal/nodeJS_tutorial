// here we are using os module which is an inbuilt module in nodeJS in our file osmodule.js
const os = require("os");

// these are some of the functions found in os module
console.log("total memory:", os.totalmem());
console.log("free memory:", os.freemem());

console.log("home directory:", os.homedir());
console.log("temporary files directory:", os.tmpdir());

console.log("hostname:", os.hostname());

console.log("os platform:", os.platform());
console.log("os release:", os.release());
console.log("os type:", os.type());
// console.log("os version:", os.version());

// console.log("EOL", os.EOL);
// console.log("CPU architecture", os.arch());
// console.log("CPU core info", os.cpus());
// console.log("load Average:", os.loadavg());
