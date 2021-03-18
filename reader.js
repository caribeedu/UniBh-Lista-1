const readline = require('readline');

const consoleReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function ask(message) {
    return await new Promise(resolve =>
        consoleReader.question(message, res => resolve(res))
    );
}

module.exports = { ask };