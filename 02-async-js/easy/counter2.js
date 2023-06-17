var counter = 0;

function printCounter() {
    count++;
    console.log(count);
}

while (true) {
    setTimeout(printCounter, 1000);
}