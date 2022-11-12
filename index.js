const readline = require('readline');
const myModules = require('./modules/myModules');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual é o seu nome?', (name) => {
    console.log(`Prazer em lhe conhecer, ${name}, eu sou o ${myModules.NodeRobot.name}.`);
    rl.question('Quantos anos você tem?', (age) => {
        if (age > myModules.NodeRobot.age) {
            console.log(`Uau! Eu tenho apenas ${myModules.NodeRobot.age} anos, me sinto novinho em folha!`);
        } else {
            console.log(`Nossa, você é muito novo, eu já tenho ${myModules.NodeRobot.age} anos. Acho que estou ficando velho...`);
        }
    })
});

rl.on('close', () => {
    console.log("Até breve");
    process.exit(0);
});