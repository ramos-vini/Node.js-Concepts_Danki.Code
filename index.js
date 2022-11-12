const fs = require('fs');

fs.readFile('danki.txt', (err, data) => {
    console.log(data.toString());
})