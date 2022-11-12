const NodeRobot = {
    name: 'Node.js',
    age: ((new Date).getFullYear() - 2009)
}

// O primeiro nome é como o módulo será exportado, o segundo nome é a variável recebida pelo módulo:
exports.NodeRobot = NodeRobot;
