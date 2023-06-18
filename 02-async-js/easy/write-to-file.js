const fs = require('fs');

fs.writeFile("./example.txt", "lil bro be writing to that file", (err) => {
    const response = fs.readFileSync("./example.txt", "utf-8");
    console.log(response)
})