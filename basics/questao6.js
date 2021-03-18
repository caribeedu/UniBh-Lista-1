const consoleReader = require('../reader');
const utils = require('../utils');

module.exports = async function () {
    let nomes = await consoleReader.ask('Digite 5 nomes (separado por vírgulas): ');

    nomes = utils.stringToStringList(nomes);

    if (nomes.length != 5)
        return utils.resetQuestionPrompt(6, questionSix);

    console.log(`Os nomes em ordem descendente inseridos foram: ${nomes.reverse().join(', ')}`);
};