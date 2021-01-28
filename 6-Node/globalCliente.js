// um conteudo incluso no global uma vez carregado fica disponivel na aplicação inteira, nao precisa chamar novamente
require('./global')

// Não é interessante usar esta técnica o melhor é criar um modulo, porém, é bom saber que é possivel
console.log(global.MinhaApp.saudacao())
// é a mesma coisa que escrever assim
console.log(MinhaApp.saudacao())

//O objeto global fica passivel de alteração o que tira a  consistencia do sistema, 
//Uma Maneira de travar isso é utilizando o metodo freeze que bloqueia alterações (veja no arquivo global) torna-lo imutavel
MinhaApp.nome = "Eita"
console.log(MinhaApp.nome)