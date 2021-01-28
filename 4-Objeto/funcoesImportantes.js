const pessoa ={
    nome: 'Rebeca',
    idade: 2,
    peso: 3
}
// captura dentro do objeto todas as chaves 
console.log(Object.keys(pessoa))
// captura dentro do objeto todos os valores
console.log(Object.values(pessoa))
// captura dentro do objeto uma lista as chaves e os valores (registros)
// Neste caso ele retorna uma array mais extrerno e outro com cada para chave valor
console.log(Object.entries(pessoa))

// podemos percorrer este array percorrendo com foreach
//operador destructure ([])
Object.entries(pessoa).forEach(([chave, valor])=>{
    console.log(`${chave}: ${valor}`)
})

// Esta função auxilia na criação de uma nova propriedade e dá maior controle ao setar novos parametros 
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable:true, //enumeravel listada? nao traz a chave em caso de falso (keys)
    writable:false, // valor pode ser alterada?
    value: "01/01/2019" // valor
})

//Object.assign (ECMAsScript 2015 ES6)
// A função assign concatena objetos sendo o primeiro parametro o destino e os demais a concatenação
// Em caso de atributo repetidos entre os objetos o ultimo subscreverá o anterior 
const dest = { a:1}
const obj1 = {b: 2}
const obj2 = {c:3, a:4}

const obj3 = Object.assign(dest, obj1, obj2)
console.log(obj3)