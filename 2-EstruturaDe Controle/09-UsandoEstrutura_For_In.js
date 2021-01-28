// for in nao acessa os valores do array e sim o indice
// para acessar os valores é necessario capturar o conteudo do array na hora da passagem  array[i]
//Sempre que puder utilize o atributo Let para garantir que a atributo exista somente dentro escopo do laço for
const notas = [ 6.7, 7.4, 9.8, 8.1, 7.7]

for ( let i in notas){
    console.log(i,'=', notas[i])
}

// É interessante usar o for desta forma em objeto, porém para array existem formas mais interessantes
const pessoa = {
    nome: "Ana",
    Sobrenome: 'Silva',
    idade:29,
    peso: 64
}

for( let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}