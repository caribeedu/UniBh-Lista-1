module.exports = async function () {
    // 19
    const tiposMusicais = ['Rock', 'Pagode', 'Axé', 'Funk', 'Samba'];

    const deletedElement = tiposMusicais.splice(0, 1)[0];
    
    console.log(`Elemento deletado: ${deletedElement}`);
};