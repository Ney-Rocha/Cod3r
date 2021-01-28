const alunos =[
    {nome: 'Joao', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativa - Ensina fazer passo a passo como fazer um determinado algoritimo
//O Foco é como deve ser feito e não o que tem que se feito
let total1 =  0
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1/ alunos.length)

// declarativa - Diz o que tem que ser feito e internamente as coisas são feitas
// pega o array e olhe o objeto e pega a nota
const getNota = aluno => aluno.nota
//some os parametros recebidos
const soma = (total, atual) => total + atual
// percorra o array alunos pegue a nota e some todas elas
const total2 =  alunos.map(getNota).reduce(soma)
console.log(total2 /  alunos.length)