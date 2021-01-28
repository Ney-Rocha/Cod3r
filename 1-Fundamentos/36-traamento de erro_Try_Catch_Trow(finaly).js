 //try - Tentar é um bloco de código que vocÊ considera que pode gerar algum erro - codigo esperado
//catch - Qdo houver o erro é acionado o bloco de codigo que estiver dentro do cacth - tratar
//trow - bloco de codigo normalmente uma função que é chamada caso tenha erro
// finally - é o Bloco de codigo que será executado no final (com erro ou sem) 


function tratarErroELancar(erro){
    // throw new Error('...')
    // throw 10
    // throw true
    throw {
        nome:erro.nome,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e){
        tratarErroELancar(e)
    }finally{
        console.log('final')
    }   
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)

//Evite lançar erros em outra linguagem ou um erro direto na cara do usuario
//
