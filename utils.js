function stringToNumbersList(stringNumbers) {
    return stringNumbers.trim().split(',').map(n => parseInt(n));
};

function stringToStringList(stringList) {
    return stringList.trim().split(',');
};

function resetQuestionPrompt(questionNumber, callback) {
    console.clear();
    console.log(`QUESTÃO ${questionNumber}\n======================`);
    callback();
}

module.exports = {
    stringToNumbersList,
    stringToStringList,
    resetQuestionPrompt
};