const consoleReader = require('../reader');
const utils = require('../utils');

module.exports = async function () {
    let notas = await consoleReader.ask('Digite 5 notas (separado por vírgulas): ');

    notas = utils.stringToNumbersList(notas);
    console.log(notas)

    if (notas.length != 5)
        return utils.resetQuestionPrompt(2, questionTwo);

    console.log(`Notas: ${notas.join(' - ')}`);
    console.log(`Média das Notas: ${notas.reduce((acc, n) => acc + n) / notas.length}`);
};