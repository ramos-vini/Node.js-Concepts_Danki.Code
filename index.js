const fs = require('fs');

// fs.unlink('danki.txt', (err) => {
//     console.log('Arquivo deletado com sucesso!');
// });

// fs.writeFile('dankicode.txt', 'Conteúdo Primário', (err) => {
//     console.log('Arquivo .txt criado com sucesso!');
// });

fs.rename('dankicode.txt', 'danki.txt', (err) => {
    if (err) throw err;
    console.log('Arquivo renomeado com sucesso!');
});