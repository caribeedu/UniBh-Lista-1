module.exports = async function () {
    // 23
    const meuPinguim = {
        nomePersonagem: 'Tux',
        origem: 'Linux',
        nascimento: 1999,
        autor: 'competição'
    };

    meuPinguim.emitirSom = () => {
        console.log('CHIRP CHIRP! É assim que os pinguins se parecem?');
    };
    
    meuPinguim.emitirSom();
};