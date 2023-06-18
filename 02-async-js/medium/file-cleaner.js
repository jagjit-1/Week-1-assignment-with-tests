const fs = require('fs');

fs.readFile("example.txt", "utf-8", (err, data) => {
    if (err) return;
    data = data.replace(/\s+/g, ' ');
    fs.writeFile("example.txt", data, (err) => {
        console.log("File modified")
    })
})