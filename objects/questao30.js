module.exports = async function () {
    // 23
    const meuPinguim = {
        nomePersonagem: 'Tux',
        origem: 'Linux',
        nascimento: 1999,
        autor: 'competição'
    };
 
    // 25
    meuPinguim.podeVoar = false;

    // 26
    meuPinguim.emitirSom = () => {
        console.log('CHIRP CHIRP! É assim que os pinguins se parecem?');
    };

    // 27
    meuPinguim.fly = () => {
        if(meuPinguim.podeVoar)
            console.log('Eu posso voar!');
        else
            console.log('Não posso voar!');
    };   
    
    for(const item in meuPinguim)
        console.log(meuPinguim[item])
};