// 2 exemplo usasndo a mesma estrura um com objeto outro com array
// vantagens e desvantagens de cada um

//os parametros serão objetos
function rand({ min = 0, max = 1000}){
  const valor = Math.random() *(max - min) +min
  return Math.floor(valor)
}

// OPÇÃO 1 - o teste esta sendo realizado passadno como parametro um objeto min e outro max
console.log(rand({max: 50, min: 40}))

//OPÇÃO 2 - cria uma constante com o o objto e chama dentro da função
const obj = { max: 20, min: 70}
console.log(rand(obj))