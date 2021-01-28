//a partir de um modulo(arquivo) que exporta uma função você pode cjhama-lo e passar os parametros necessarios para o processamento da função ou metodo

const saudacoes =  require('./passandoParametros')('Ana', 'Lucas', 'João', 'Vaney')
console.log(saudacoes)

// Deps e importScripts
// Você consegue recriar a pasta node module a partir do arquivo package.json