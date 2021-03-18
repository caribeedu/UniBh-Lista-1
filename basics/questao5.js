const consoleReader = require('../reader');
const utils = require('../utils');

module.exports = async function () {
    let idades = await consoleReader.ask('Digite 5 idades (separado por vírgulas): ');

    idades = utils.stringToNumbersList(idades);

    if (idades.length != 5)
        return utils.resetQuestionPrompt(5, questionFive);

    let maioresIdade = 0;
    let menoresIdade = 0;

    idades.forEach(n => {
        if (n >= 18)
            maioresIdade++;
        else
            menoresIdade++;
    });

    console.log(`No total são ${maioresIdade} maiores de idade e ${menoresIdade} menores de idade.`);
};