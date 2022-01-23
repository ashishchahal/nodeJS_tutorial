const fs = require("fs");

// fs.readFile("file.txt", "utf8", (err, data) => {
//   console.log(err, data);
// });

// const a = fs.readFileSync("file.txt");
// console.log("Reading(blocking intentionally using sync):", a.toString());

// fs.writeFile("file2.txt", "this is a data 2", () => {
//   console.log("written to the file.");
// });
// console.log("writing to a file(non-blocking):");

fs.writeFileSync("file2.txt", "this is a data 4");
console.log("writing to a file(blockign uisng sync");
// console.log("Finished reading file");
