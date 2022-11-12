const readline = require('readline');
const modulo1 = require('./modules/modulo1');
const MyClassModule = require('./modules/modulo2');

let Prints = new MyClassModule;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome?', (name) => {
    console.log(`Prazer em lhe conhecer, ${name}, eu sou o ${modulo1.NodeRobot.name}.`);
    rl.question('Quantos anos você tem?', (age) => {
        if (age > modulo1.NodeRobot.age) {
            console.log(`Uau! Eu tenho apenas ${modulo1.NodeRobot.age} anos, me sinto novinho em folha!`);
        } else {
            console.log(`Nossa, você é muito novo, eu já tenho ${modulo1.NodeRobot.age} anos. Acho que estou ficando velho...`);
        }
    })
});

rl.on('close', () => {
    Prints.goodbye();
    process.exit(0);
});