const pai = { nome: 'Pedro', corCabelo: 'castanho'}

 // Criando um objeto filho a partir do Object.create e incluido outros atributos
const filha1 = Object.create(pai)
filha1.nome = 'Lorena'
// neste caso o objeto consegue buscar a herança do pai
console.log(`minha filha ${filha1.nome} tem cabelos ${filha1.corCabelo}`)

const filho2 = Object.create(pai, {
    nome:{value:'Raphael',  writable: false, enumerable: true},
    sexo:{value:'Masc'}
})

console.log(`O filho mais velho é ${filho2.nome} ele é do sexo ${filho2.sexo} e tem cabelos da cor ${filho2.corCabelo}`)

console.log(Object.values(filha1))
console.log(Object.values(filho2))

//função hasOwnProperty - verifica se a propriedade pertence ao objeto
for (let key in filho2){
    // percorre o objeto e traz a propriedade
    // Se a propriedade for do objeto trará o nome se nao trara uma declaração de herança
    filho2.hasOwnProperty(key) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}