// Creating the "EventEmitter class
const EventEmitter = require('events');

// Creating the "event" object
const event = new EventEmitter();

// Creating an event handler / creating the event function
var myEventHandler = (name) => {
    console.log(name);
};

// Assigning the event handler/function to an event:
event.on("sayMyName", myEventHandler);
event.on("sayMyName", myEventHandler);
event.on("sayMyName", myEventHandler);
event.on("sayMyName", myEventHandler);
// multiple calls (calling multiple different functions) from a single event trigger

// Firing the event
event.emit("sayMyName", "Nishakar Kumar");

// we can create our own event listeners, just like, 'click','mouseover' etc...
