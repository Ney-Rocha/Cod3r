// criação de Array de forma literaria
//Array é uma estrutura indexada, possui posições indexada ha posições começanod por zero
const valores = [7.7, 8.9,6.3,9.2] //um par de colchetes cria um array
console.log(valores[0], valores[3])
// busca um elemneto que nao exite no array nao dá erro dá undefined
console.log(valores[4])

// inclui dado no array através do indice
valores[4]= 10
console.log(valores)
// length -Busca o tamanho do array solicitado
console.log(valores.length)

// array recebe varios tipos de dados num mesmo array porem não é uma boa prática
valores.push({id:3}, false, null, ' teste') //função push -  inclui novos valores no array
console.log(valores)

//função POP -remove o utlimo item do array
console.log(valores.pop()) 

//delete - remove o item passado atraves da index
delete valores[1]
console.log(valores)

//Array é uma estrutura do tipo object
console.log(typeof valores)
