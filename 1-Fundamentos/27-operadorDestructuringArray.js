// usando Destructuring com array
// Precisamos tomar cuidado parois a linguagem usa o mesmo token
//a leitura é fundamental pra sabermos se estamos criando/definindo 
//ou desestrututrando
const [a] = [10]
console.log(a)


// desestruturando multiplos elementos
//atribuindo um novo valor tudo numa mesmo atribuição
const[ n1, , n3, , n5, n6 = 0] = [18, 7, 9, 8]
console.log(n1, n3, n5, n6)

//desestruturação aninhada
//array com array dentro (matrizes)
const [ ,[, nota]] = [[,8,8], [9,6,8]]
console.log(nota)