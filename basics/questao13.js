module.exports = async function () {
    return await new Promise(resolve => {
        const nomeVisitante = "João";
        console.log(`O nome do visitante é ${nomeVisitante}`);

        resolve();
    });
};