const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()// remove o ultimo elemtno do array
console.log(pilotos)

pilotos.push('Verstappen') // Adiciona um elemento no final da lista
console.log(pilotos)

pilotos.shift()// Remove o primeiro elemento da lista
console.log(pilotos)

pilotos.unshift('Hamilton')// Adiciona o primeiro elemento da lista
console.log(pilotos)

// adicionar com splice
pilotos.splice(2, 0, 'Bottas', 'Massa')

//Remover com splice
pilotos.splice(3,1)
console.log(pilotos)

//Metodo que cria um novo array e copia apenas os itens a partir do indice apontado como parametro (pegar uma parte do array)
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

// quando vc pega um inicio e fim o ultimo elemento nao entra é apenas o limite 
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)