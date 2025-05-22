const EventEmitter = require ('events');

// instance

const event = new EventEmitter();

// Check-in
event.on('checkIn', (ClientName, roomNumber) => {
    console.log(`${ClientName} has checked in to room ${roomNumber}.`);
})

// For-Food-Order

event.on('orderFood', (ClientName, foodItem) => {
    console.log(`${ClientName} has ordered ${foodItem}.`);
})

//  out
event.on('checkout', (ClientName, roomNumber) => {
    console.log(`${ClientName} has checked out of room ${roomNumber}.`);
})

event.emit('checkIn', 'sid', 301);
event.emit('orderFood', 'sid', 'CurdRice');
event.emit('checkout', 'sid', 301);

event.emit('cheeckIn', 'Boy', 16);
event.emit('orderFood', 'Boy', 'Biriyani');