//string
// ' - abre e fecha aspas simple
// "" - abre e fecha aspas duplas
//`` - templete string

const escola = "Cod3r"
console.log(escola.charAt(4))
console.log(escola.charAt(3))
//unicode-table.com
console.log(escola.charCodeAt(3)) // codigo relacionado a tabela unicode

console.log(escola.indexOf('C')) //localizar o caractere dentro de uma string

console.log(escola.substring(2)) //lê a string até o tamnho que voce passar para a funcao
console.log(escola.substring(0,3)) ////le do inicio até o limite sem ler o o ultimo carateres passado neste caso o 3

// função de concatenar
console.log('Escola '.concat(escola.concat("!")))
console.log('Escola ' + escola + "!")

//funcção de substituir 
console.log(escola.replace(/\d/,'e'))//expressão regular  para substituir caractere
console.log(escola.replace(/\w/g,'e'))//expressão rgular GLOBAL para substituir tudo
/* Função split, separa um string em um array 
como parametro você usa qual será o separardor ',' */
console.log('Ana, Maria, Pedro'.split(','))
