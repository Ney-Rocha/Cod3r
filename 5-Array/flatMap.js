const escola = [{
    nome: 'Turma N1',
    alunos:[{
        nome: 'Gustavo',
        nota: 8.1
    },{
        nome:'Ana',
        nota:9.3
    }]
},{
    nome: 'Turma N2',
    alunos:[{
        nome: 'Rebeca',
        nota: 8.9
    },{
        nome:'Roberto',
        nota:7.3
    }]

}]


const getNotaDoAluno = aluno => aluno.nota
const getNotaDaturma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 =  escola.map(getNotaDaturma)
console.log(notas1)


console.log([].concat([8.1, 9.3], [8.9, 7.3]))

Array.prototype.flatmap =  function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const nota2 = escola.flatmap(getNotaDaturma)
console.log(nota2)