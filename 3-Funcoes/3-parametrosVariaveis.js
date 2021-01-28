// versão old scholl antes do ecma script 2015
// o fato de nao passar parametros nao significa que a função nao possa receber estes parametros
// para isso utilizasse arguments

//arguments recupera paramentos que são passados em funçoes que nao foram declaradas parametros
//arguments é um array que guarda  parametros (atualmente existe um operador que substitui este modelo de função chamado rest/spred)
function soma (){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma

}

console.log(soma())
console.log(soma(1))
console.log(soma(1.2, 2.2, 3.3))
console.log(soma(1.1, 2.2, 'teste'))
console.log(soma('a', 'b', 'c'))