/*10) Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function retornaDivisivel(numero){
     let divisivel = numero % 3
     if(divisivel == 0){
         return true
     }else
        return false
}

console.log(retornaDivisivel(28))
console.log(retornaDivisivel(77))
console.log(retornaDivisivel(38))
console.log(retornaDivisivel(30))
console.log(retornaDivisivel(52))
console.log(retornaDivisivel(27))