const fs = require('fs');

fs.readFile('./example.txt', 'utf-8', (err, data) => {
    console.log(data);
})