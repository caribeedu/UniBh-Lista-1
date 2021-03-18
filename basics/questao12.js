module.exports = async function () {
    return await new Promise(resolve => {
        const nomePlaneta = "Júpiter";
        console.log(`O planeta é ${nomePlaneta}`);

        resolve();
    });
};