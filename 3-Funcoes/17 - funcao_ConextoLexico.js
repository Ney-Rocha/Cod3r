// Qdo declarada ela carrega consigo o contexto de onde ela foi escrita nao onde esta sendo rodada e sim onde foi definida
const valor = 'global'

function minhaFuncao(){
    //busca a const no escopo global
    console.log(valor)
}

function exec(){
    const valor = 'local'
    // roda a const da função declarada
    minhaFuncao()
}

exec()