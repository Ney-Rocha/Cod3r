/*  17) Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20%
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */

function aumentaSalario (planotrabalho, salario){
    switch(planotrabalho){
        case 'A':
            var reajuste = salario + (salario * 0.10) // poderia ser somente (salario * 1.10)
            return 'R$ ' + reajuste.toFixed(2)
            break
        case 'B':
            var reajuste = salario + (salario * 0.15)
            return 'R$ ' + reajuste.toFixed(2)
            break
        case 'C':
            var reajuste =salario + (salario * 0.20)
            return 'R$ ' + reajuste.toFixed(2)
            break
        default:
            return "Plano inválido"

    }

}

console.log(aumentaSalario ('A', 3200.00))
console.log(aumentaSalario ('B', 3200.00))
console.log(aumentaSalario ('C', 3200.00))