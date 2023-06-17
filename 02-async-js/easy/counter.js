var count = 0;
function printCounter() {
    count++;
    console.log(count);
}

setInterval(printCounter, 1000);