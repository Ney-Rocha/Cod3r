//estrategia de gerar valor padrao

//Esta funcão deve receber 3 parametros caso nao receba existem valores padroes setados, porém dão margem para erro
function soma1(a, b , c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c

}


// no exemplo aabaixo  qdo o parametro é informado 0 a funçaõ exibe erro pois o "ou" lê como false e assume o valor padrão 1
console.log( soma1(1), soma1(3), soma1(1, 2, 3), soma1(0, 0 , 0))

function soma2(a, b, c){
    // se A for (estritmente) indefinido ele vai receber o valor de 1
    a = a !== undefined ? a : 1
    // Existe o argumento 1, ou seja, b esta preenchido, se tiver pegue B caso nao esteja assuma 1
    b = 1 in arguments  ? b:1
    // se c nao for um numero  (qualquer outro tipo de dado) recebe o valor padrao  se for ele paga o valor de c/ + recomendada para numero
    c = isNaN(c) ? 1 : c

    return a + b + c
}

console.log( soma2(1), soma2(3), soma2(1, 2, 3), soma2(0, 0 , 0))

// porem o mais recomendado é o da atualização do ecma script 2015
// declara valor padrão e substitui sempre que nao houver preenchimento
function soma3( a = 1, b = 1, c = 1){
    return a + b + c
}

console.log( soma3(1), soma3(3), soma3(1, 2, 3), soma3(0, 0 , 0))