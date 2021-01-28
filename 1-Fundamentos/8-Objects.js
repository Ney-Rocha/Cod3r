/* JAVA SCRIPT É UMA LLINGUAGEM MULT PARADGMA, ELE ACEITA O TIPO DE PROGRAMAÇÃO
Procidural
OO - nOrientada a Objetos
Funcional - Funcional
*/


// #################################################
///JSON -É UM FORMATO TEXTUAL nao é java script
//JSON  - JAVA SCRIPT OBJECT NOTATION
// #################################################

//CRIANDO UM OBJETO DE FORMA LITERAL
const prod1 ={} //um par de chaves cria um objeto vazio e sem caracteristicas que podem ser dadas depois
//em JS um objeto é uma coleção de chave e valor
prod1.id = 1234
prod1.nome = 'celular ultra mega'
prod1.preco = 2399.00
// pode usar espaço no estilo notação colchete
prod1['Deconto legal'] = 8.40 //evitar atributos com espaço
console.log(prod1)

// notação literal de objetos
const prod2 = {
  id: 213123,
  nome: 'Camisa Pola',
  preco: 123.89,
  ['Desconto legal'] : 2.43,
}
console.log(prod2)