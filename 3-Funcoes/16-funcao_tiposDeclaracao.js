// function declaration - permite que vc chame a função mesmo antes de declara-la (faz o içamento)
ex: console.log(soma(3, 4))
function soma(x, y){
    return x = y
}

//function expression - nao permite que a funçao seja chamada antes de sua declaração (nao faz o içamento)
// ex - ex: console.log(sub(3, 4)) - resultado : function is not defined
const sub = function ( x, y){
    return x - y
}

//named function expression  - nao permite que a funçao seja chamada antes de sua declaração (nao faz o içamento)
// ex - ex: console.log(mult(3, 4)) - resultado: function is not defined
const mult = function mult(x, y) {
    return x * y
}

