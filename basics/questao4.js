const consoleReader = require('../reader');
const utils = require('../utils');

module.exports = async function () {
    let numeros = await consoleReader.ask('Digite 5 números (separado por vírgulas): ');

    numeros = utils.stringToNumbersList(numeros);

    if (numeros.length != 5)
        return utils.resetQuestionPrompt(4, questionFour);

    let maiorNumero = undefined;
    numeros.forEach(n => {
        if (n > maiorNumero || !maiorNumero)
            maiorNumero = n;
    });

    console.log(`O maior número é ${maiorNumero}`);
};