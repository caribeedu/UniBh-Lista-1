const consoleReader = require('./reader');

async function showMenu() {
    console.clear();

    const menuMessage = `LISTA 1\n======================\nDigite o número da questão: `;

    const question = await consoleReader.ask(menuMessage);
    await selectQuestion(question);
}

async function selectQuestion(question) {
    const questionNumber = parseInt(question);

    if (isNaN(questionNumber) || questionNumber < 0) {
        showMenu();
        return;
    }

    let questionToExecute = undefined;

    if (questionNumber < 17)
        questionToExecute = require('./basics/questao' + questionNumber);
    else if (questionNumber < 23)
        questionToExecute = require('./arrays/questao' + questionNumber);
    else if (questionNumber < 31)
        questionToExecute = require('./objects/questao' + questionNumber);
    else if (questionNumber < 33)
        questionToExecute = require('./functions/questao' + questionNumber);
    else {
        showMenu();
        return;
    }

    console.clear();
    console.log(`QUESTÃO ${questionNumber}\n======================`);

    await questionToExecute();

    await consoleReader.ask('\nAperte ENTER para voltar ao menu.');
    showMenu();
}

showMenu();