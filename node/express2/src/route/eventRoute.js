import { Router } from "express";
import { EventEmitter } from "events";

// Node.js has a built-in module, called "Events",
// where you can create, fire, and listen for your own events.

const newRouter = Router();
//Initializing Count
let count = 0;

const event = new EventEmitter(); // creating a new instance allowing us to define and emit custom events.

//create(define) event by attaching eventListener

let handler2 = () => {
  //this is a listener function named countAPI
  count++;
  console.log("event called 1");
  console.log(count);
};
event.on("countAPI", handler2);
//we can register couple of callbacks. from one event we can call multiple functions
event.on("countAPI", () => {
  count++;
  console.log("event called");
  console.log(count);
});

//Adds the listener function to the beginning of the listeners array
event.prependListener("countAPI", () => {
  // console.log("someone connected!");
});
//Adds a one-time listener function to the beginning of the listeners array.
// The next time eventName is triggered, this listener is removed.
event.prependOnceListener("countAPI", () => {
  // console.log("Ah, we have our first user!");
});

event.addListener("countAPI", () => {
  console.log("im listener");
});
///for remove listener
let handler = () => {
  console.log("im listener 2");
};
event.addListener("countAPI", handler);

event.addListener("countAPI", () => {
  // console.log("im listener 3");
});

// event.emit("countAPI")
newRouter
  .route("/new")
  .post((req, res, next) => {
    res.send("this is Api hit");
  })
  .get((req, res, next) => {
    res.send("Api called");
    //triggering event by using .emit(method)
    event.emit("countAPI"); //triggering event
  })

  .delete((req, res, next) => {
    res.send("this is Api hit");
    //for removing listener
    // event.removeListener("countAPI", handler);
    event.removeListener("countAPI", handler2);

    event.emit("countAPI");
  })
  .patch((req, res, next) => {
    res.send("this is Api hit");
  });

export default newRouter;
