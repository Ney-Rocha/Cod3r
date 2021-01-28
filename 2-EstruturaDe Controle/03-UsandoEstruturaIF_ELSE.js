const imprimirresultado = function(nota){
    if(nota >= 7){
        console.log('Aprovado');
    }else{
        console.log('Reprovado!');
    }
}
imprimirresultado(9)
imprimirresultado(6)
// Tomar cuidado pelo fato da linguagem ser fracamente tipada para fazer a verificação.
// No exemplo abaixo o resultado deveria ser um erro mas o Js tenta ajustar o valor de string para numero
imprimirresultado('Epa!')