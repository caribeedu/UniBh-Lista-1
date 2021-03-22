module.exports = async function () {
    // 20
    const tiposMusicais = ['Pagode', 'Axé', 'Funk', 'Samba'];

    const novosTiposMusicais = ['Rap', 'Reggae'].concat(tiposMusicais);
    
    console.log(novosTiposMusicais);
};