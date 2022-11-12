const http = require('http');
const fs = require('fs');

const port = 3000;
const hostname = "127.0.0.1"

// Criando novo arquivo
// fs.writeFile('danki.txt', 'Conteúdo Primário', (err) => {
//     if (err) throw err;
//     console.log('Arquivo .txt criado com sucesso!');
// });

const server = http.createServer((req, res) => {
    if (req.url == '/danki') {

        fs.readFile('index.html', (err, data) => {

            // Criando novo arquivo ou adicionando conteúdo (caso arquivo já exista)
            fs.appendFile('danki.txt', '\nConteúdo Adicionado', (err) => {
                if (err) throw err;
                console.log('Conteúdo adicionado com sucesso!');
            });

            res.writeHead(200, { "Content-type": "text/html" });
            res.write(data);
            return res.end();
        });
    } else {
        return res.end();
    }
});

server.listen(port, hostname, () => {
    console.log("O servidor está rodando.");
});
