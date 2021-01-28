/*12) Faça um algoritmo que calcule o fatorial de um número.*/
// Num return se for utilizado uma string ele quebra a lógica e nao 

function calculaFatorial (numero){
    if(numero == 0 ){
        return 1
    } else {
        return numero * calculaFatorial(numero - 1)
    }
}

console.log(calculaFatorial(0))
console.log(calculaFatorial(1))
console.log(calculaFatorial(10))

