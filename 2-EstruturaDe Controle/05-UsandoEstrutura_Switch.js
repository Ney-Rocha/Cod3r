//Switch -  feito para multiplas seleções
//Notar que nao retorna verdadeiro ou falso, ou seja, nao é uma epxressao relacional
// não compara intervalo
// retona algum valor (inteiro, comparativo)
const imprimirResultado = function(nota){
    switch(Math.floor(nota)){
        //´podemos ignorar um resultado e associa-lo a outra opção de case
        case 10:
        case 9:
            console.log("Quadro de Honra")
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log("Reprovado")
            break
        default:
            console.log('Nota Inválida')        
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)