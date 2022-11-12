const fs = require('fs');

fs.readFile('danki.txt', (err, data) => {
    let str = data.toString();

    let array = str.split("/");

    console.log(array);
})