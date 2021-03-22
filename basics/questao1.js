module.exports = async function () {
    const notas = [2.7, 5.1, 7.8, 9.1, 6.0];

    console.log(`Notas: ${notas.join(' - ')}`);
    console.log(`Média das Notas: ${notas.reduce((acc, n) => acc + n) / notas.length}`);
};