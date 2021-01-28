//Object.preventExtensions -  função nativa que permite que exclua atributos mas nao permite que aumente a qtd de atributos de um objeto
const produto = Object.preventExtensions({
    nome:'Qualquer',
    preço: 1.99,
    tag: 'Promoção'
})
// isExtensible - função nativa e retorna true ou false se um objeto por ser extensível
console.log('Extensível:', Object.isExtensible(produto))

// Altera um atributo existente
produto.nome = "Borracha"
//tenta incluir um novo atributo porém sem sucesso por conta da função prevent Extensions
produto.descricao ="Borracha escolar branca"
//delete um atributo existente no objeto
delete produto.tag
// imprime resultado final
console.log(produto)


//Object.seal - função nativa (selar) - faz com que você nao consiga nem remover e nem adicionar atributos do objeto, mas consegue mexer nos atributos existentes
const pessoa = { nome:'Juliana', idade: 35}
Object.seal(pessoa)
//IsSealed - Funcão nativa verifica se um objeto esta selado
console.log('Selado:' , Object.isSealed(pessoa))
//Tenta inserir um novo atributo - nao possivel por conta da função isSealed (selado)
pessoa.sobrenome = ' Silva'
//Tenta deletar um atributo - nao possivel por conta da função isSealed (selado)
delete pessoa.nome
// altera a informação contida em um atributo - possivel mesmo com a unção isSealed (selado)
pessoa.idade = 28
console.log(pessoa)

//Object.freeze = selado + Valores constantes nao pode alterar nada! fica congelado!