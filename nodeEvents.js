import EventEmitter from "events";

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on("waterfull", () => {
  console.log("an event occured");
  setTimeout(() => {
    console.log("after 3 seconds another reminder");
  }, 3000);
});

myEmitter.emit("waterfull");

console.log("outside events");
