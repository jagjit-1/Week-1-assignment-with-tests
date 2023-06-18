/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep(seconds) {
    var start = new Date();
    while (new Date() - start < 1000 * seconds) { }
    return;
}

console.log("good night", new Date())
sleep(10);
console.log("woke up", new Date())