// Objeto que possui muitas coisas que permitem sua utilização
//O sistema de modulo vem para organizar as coisas , alterar o global pode deixar seu sistema vulneravel, so use cao nao tenha ouitra opção, ou seja, nunca!
//é justivicavel incluir algo no global somente se todos os arquivos usarem, para evitar de ficar fazendo varios require
// console.log(global)

global.MinhaApp = {
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema legal'
}


// global.MinhaApp = Object.freeze({
//     saudacao() {
//         return 'Estou em todos os lugares'
//     },
//     nome: 'Sistema legal'
// })