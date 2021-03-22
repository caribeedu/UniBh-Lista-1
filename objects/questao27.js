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

    meuPinguim.fly = () => {
        if(meuPinguim.podeVoar)
            console.log('Eu posso voar!');
        else
            console.log('Não posso voar!');
    };    
};