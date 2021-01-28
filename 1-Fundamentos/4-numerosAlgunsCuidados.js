// Cuidados com numeros em JS

console.log(7/0) //infinity
//converte string em numero precisamos ter cuidado
console.log("10"/2) 
console.log("show" * 2) //not a Number, algumas linguagens escreveriam a frase 2 X
console.log(0.1 + 0.7) //especificação nao suportada, impresisão problema com ponto flutuante

// console.log(10.tostring()) nao suportando gera execeçao
/*não podemos chamar um numero de forma literal,
 mas, podemos chamar entre parenteses*/
console.log((10.345).toFixed(2))