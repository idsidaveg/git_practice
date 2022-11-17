/*
// this will execute endlessly as setTimeout() method is an
// asynchronous method that will go into a queue
// helllo... hello (to infinity)

let x = true;
setTimeout(() => {
    x = false;
})

while (x) {
    console.log("hello");
}

*/

let x = true;
let count = 0;
let y = 0;

setTimeout(() => {
    x = false;
}, 2000)
var intervalId = setInterval(() => {
    if (x) {
        console.log(count++);
    } else {
        console.log(y++, 'processing interval');
        if (y === 10) clearInterval(intervalId);
    }
}, 200)

