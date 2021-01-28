/*16) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas. */

function calculador(numero1=0, sinal, numero2=0){
    switch(sinal){
        case '+':
            return numero1 + numero2
            break
        case '-':
            return numero1 - numero2
            break
        case '*':
            return numero1 * numero2
            break
        case '/':
            return numero1 / numero2
            break
        case '%':
            return 'sobrou: ' + numero1 % numero2
            break
        default:
            return 'Operação inválida'
    }
}

console.log(calculador( 3, '*', 2 ))
console.log(calculador( 3, '-', 2 ))
console.log(calculador( 3, '+', 2 ))
console.log(calculador( 3, '/', 2 ))
console.log(calculador( 3, '%', 2 ))
console.log(calculador( 3, '$', 2 ))