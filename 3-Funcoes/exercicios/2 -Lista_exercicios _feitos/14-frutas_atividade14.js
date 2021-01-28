/*14) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
também um default, que retornará uma mensagem de erro no console.*/

function consultaFruta(fruta){
    switch(fruta){
        case 'maça':
        case 'Maça':
        case 'MAÇA':
            return 'Não vendemos esta fruta aqui'
            break
        case 'Kiwi':
        case 'Kiwi':
        case 'KIWI':
            return 'Estamos com escassez de kiwis'
            break
        case 'melancia':
        case 'Melancia':
        case 'MELANCIA':
            return 'Aqui está, são 3 reias o kilo'
        default:
            return 'Erro no console'
    }
}

console.log(consultaFruta('maça'))
console.log(consultaFruta('melancia'))
console.log(consultaFruta(' Kiwi'))
console.log(consultaFruta('Abobora'))