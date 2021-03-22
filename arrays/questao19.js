module.exports = async function () {
    // 17
    const tiposMusicais = ['Rock', 'Pagode'];

    // 18
    tiposMusicais.push('Funk');
    
    tiposMusicais.push('Samba');
    
    if(tiposMusicais.length % 2 === 0)
        tiposMusicais.splice(tiposMusicais.length / 2, 0, 'Axé')
    
    console.log(tiposMusicais);
};