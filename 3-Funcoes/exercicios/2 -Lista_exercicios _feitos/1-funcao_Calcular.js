// 1) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
// multiplicação e divisão desses valores.

function calcular (x, y){
    let soma = x + y
    let subtracao = x - y
    let multiplicacao = x * y
    let divisao = x / y
    let modulo = x % y 
    return `O valor da soma é: ${soma}, 
o valor da subtração é: ${subtracao}, 
O valor da multiplicação é: ${multiplicacao},
O valor da divisão é ${divisao}
O valor do modulo da divisão é: ${modulo}`
}



console.log(calcular( 6, 3))