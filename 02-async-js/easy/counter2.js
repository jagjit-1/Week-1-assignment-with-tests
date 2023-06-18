var counter = 0;

function printCounter() {
    counter++;
    console.log(counter);
}

while (true) {
    setTimeout(printCounter, 1000);
}