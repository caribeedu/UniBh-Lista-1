const consoleReader = require('../reader');
const utils = require('../utils');

module.exports = async function () {
    let numeros = await consoleReader.ask('Digite 5 números (separado por vírgulas): ');

    numeros = utils.stringToNumbersList(numeros);

    if (numeros.length != 5)
        return utils.resetQuestionPrompt(3, questionThree);

    numeros.forEach(n => console.log(`\nNúmero ${n} elevado ao quadrado é ${n ** 2}`));
};