//operador unario - apenas um operando
//operador binario - 2 operandos
//operadorternario - 3 operandos - 
    // - uma expressão relacional que retorna verdadeiro ou false
    // -  se verdadeiro retorna a primeiro opção
    // -  Se falso retorna a segunda opção

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.8))