/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

const {wait} = require('./promisify-setTimeout.js')

function waitOneSecond() {
    wait(1);
}

function waitTwoSecond() {
    wait(2);
}

function waitThreeSecond() {
    wait(3);
}

function calculateTime() {
    const prevTime = new Date();
    Promise.all(waitOneSecond, waitTwoSecond, waitThreeSecond);
    console.log(new Date() - prevTime);
}