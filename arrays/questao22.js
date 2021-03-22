const consoleReader = require('../reader');

function somaValores(listaValores) {
    return listaValores.reduce((acc, valor) => acc += valor);
}

module.exports = async function () {
    const valores = [];
    
    while(true) {
        let valor = await consoleReader.ask('Digite um valor: ');
        valor = parseFloat(valor);
    
        if (isNaN(valor)) {
            const soma = somaValores(valores);
            console.log(`Soma dos valores: ${soma}`);
            break;
        }
        else
            valores.push(valor);
    }
};