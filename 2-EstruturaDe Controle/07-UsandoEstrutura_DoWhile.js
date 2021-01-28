//uma estrutura pouco usada
// Do While é a unica e setença de codigo (expressão) que a expressão vem depois do bloco
function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min //(+min)garantir que o valor minimo seja o informado como minimo 
    return Math.floor(valor)
}

let opcao = -1

do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Ópção escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima')
