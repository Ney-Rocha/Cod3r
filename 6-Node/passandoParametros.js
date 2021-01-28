// Como passar um parametro para um modulo
// Se um modulo retorna uma função, voce pode envocar a função passando os parametros e o que tiver dentro do modulo será exxecutado.

module.exports = function (...nomes){
    return nomes.map(nome => `Boa semana ${nome}!`)
}