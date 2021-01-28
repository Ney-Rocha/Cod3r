// Utilizada para executar uma qtd INDETERMINADA de situações
// Ex - Enquanto nao diitar isso
// Enquanto a interface grafica nao tiver marcada como verdadeiro

function getInteiroAleatorioEntre (min, max) {
    //random gera um numero eleatorio entre 0 e 1
    const valor = Math.random() * (max - min) + min
    // floor arrendendo o numero para baixo
    return Math.floor(valor)
}

let opcao = 0

while (opcao != -1){
    opcao = getInteiroAleatorioEntre(-1, 10)
    // templet String carece que seja utilizado craze no lugar de aspas simples ou duplas
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')