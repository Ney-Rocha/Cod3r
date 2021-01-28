/* 18) Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo.’*/
function leNumero (numero){
    switch (numero){
        case 10:
            return 'Dez'
            break
        case 9:
            return 'Nove'
            break
        case 8:
                return 'Oito'
                break
        case 7:
            return 'Sete'
            break
        case 6:
            return 'Seis'
            break
        case 5:
            return 'Cinco'
            break
        case 4:
            return 'Quatro'
            break
        case 3:
            return 'Três'
            break
        case 2:
            return 'Dois'
            break
        case 1:
            return 'Um'
            break
        case 0:
            return 'Zero'
            break
        default:
            return 'Número fora do intervalo'        
    }
}

console.log(leNumero(10))
console.log(leNumero(9))
console.log(leNumero(8))
console.log(leNumero(7))
console.log(leNumero(6))
console.log(leNumero(5))
console.log(leNumero(4))
console.log(leNumero(3))
console.log(leNumero(2))
console.log(leNumero(1))
console.log(leNumero(0))
console.log(leNumero(33))