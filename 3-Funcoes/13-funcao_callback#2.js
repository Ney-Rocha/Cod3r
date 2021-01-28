const notas = [ 7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// sem call back
// cria uma variavel com um array novo para armazenaras notas baixas
// percorre o arrai com um for para ler todas
// Se a  notas for menor que 7 inclui ela no novo array
let notasBaixas1 =  []
for(let i in notas){
    if( notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// com callback
// filter - ele varre o array igual ao foreach e porem fazendo um filtro baseado no callback
// Ele cria um novo array com os elementos do resultado do callback
// no exempl abaixo ele vai receber uma nota e se a nota for menor que sete ele armazenará no novo array
notasBaixas2 = notas.filter( function(nota){
    return nota < 7
})
console.log(notasBaixas2)

//callback com filter e arrow function

notasBaixas3 = notas.filter( nota => nota < 7)
console.log(notasBaixas3)

// desta maneira economiza algumas linhas de codigo
// nao precisamos criar um novo array
//nao precisou dar push no array, e etc...