const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome?', (name) => {
    console.log(`Prazer em lhe conhecer, ${name}, eu sou o Node.js.`);
    rl.question('Quantos anos você tem?', (age) => {
        let nodeAge = ((new Date).getFullYear() - 2009)
        if (age > nodeAge) {
            console.log(`Uau! Eu tenho apenas ${nodeAge} anos...`);
        } else {
            console.log(`Nossa, você é muito novo, eu já tenho ${nodeAge} anos.`);
        }
    })
});

rl.on('close', () => {
    console.log('Até breve!');
    process.exit(0);
});