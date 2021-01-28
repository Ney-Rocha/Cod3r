

function calcularCardapio(codigo, qtd) {
    switch (codigo) {
        case 100:
            return qtd * 3
        case 200:
            return qtd * 4
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return qtd * 3.5
        case 600:
            return qtd * 1.2
        default:
            return 'Produto inválido.'
    }
}

console.log(calcularCardapio(100, 4))
console.log(calcularCardapio(200, 3))
console.log(calcularCardapio(500, 1))
console.log(calcularCardapio(600, 4))