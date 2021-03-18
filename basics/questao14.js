const consoleReader = require('../reader');
const utils = require('../utils');

module.exports = async function () {
    let valor = await consoleReader.ask('Digite o valor do produto: ');

    valor = parseFloat(valor);

    if (isNaN(valor))
        return utils.resetQuestionPrompt(14, questionFourteen);

    if (valor < 100 || valor > 200)
        console.log('O valor não está entre 100 e 200.');
    else
        console.log('O valor está entre 100 e 200.');
};