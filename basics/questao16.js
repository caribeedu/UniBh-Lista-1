const consoleReader = require('../reader');

module.exports = async function () {
    let user = await consoleReader.ask('Digite seu usuário: ');

    if (!user)
        console.log('Cancelado')
    else if (user != 'Admin')
        console.log('Não conheço você')
    else {
        let password = await consoleReader.ask('Digite sua senha: ');

        if (password === 'UniBH')
            console.log('Bem vindo')
        else if (password)
            console.log('Senha incorreta')
        else if (!password)
            console.log('Cancelado')
    }
};