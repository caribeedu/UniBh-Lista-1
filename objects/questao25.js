module.exports = async function () {
    // 23
    const meuPinguim = {
        nomePersonagem: 'Tux',
        origem: 'Linux',
        nascimento: 1999,
        autor: 'competição'
    };

    meuPinguim.podeVoar = false;

    console.log(`Olá, eu sou o ${meuPinguim.nomePersonagem} e ${meuPinguim.podeVoar ? '' : 'não'} posso voar.`);
};