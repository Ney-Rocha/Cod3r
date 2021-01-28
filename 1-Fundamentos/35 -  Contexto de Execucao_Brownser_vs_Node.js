// conscientcia de RUNTIME (tempo de excução, ONDE ESTA SENDO executado seu código)
// Js no front - Rodando no Browser - Roda assincrono e saber que chamara algo no backend (padrão observ)
// Js no Back - Rodando no Node


/*============================ Cuidado com o Local==================================================*/
// Rodando no Browser - o maior objeto é o Window ele possui escopo global, ou seja, tudo esta dentro dele
//  var -  Esta no scopo global e perrmite que seja redeclarada e vai para o escopo do windom
//  windon.variavel
//  let -  Esta no escopo global mas nao permite que seja redeclarada e nao vai para o escopo do windom
//  windon.let

// CONSTANTES E VARIAVEIS DECLARADAS COM LET NAO VAO DIRETAMENTE PARA O OBJETO GLOBAL WINDOW
// ELAS FICAM NUM ESPAÇO DE MEMORIA QUE AS TORNAM GLOBAIS MAS NAO DIRETAMENTE AO OBJETO WINDOM
// No browser todos os arquivos ficam disputam O ESCOPO GLOBAL

let a = 3
global.b = 123
this.c = 456
this.d = false
this.e = 'teste'


//global em node equivale ao objeto window
// global==window
//EM NODE CADA ARQUIVO É UM MODULO, DIFERENTE DA WEB QUE NORMALMENTE USAMOS ARQUIVO MINIFICADOS
// E TODOS OS ARQUIVOS VIRAM UM ARQUIVO SÓ DISPUTANDO   NO ESCOPO GLOBAL
//APLICAÇÃO MODULARIZADA CADA ARQUIVO REPRESENTA UM MODULO
console.log(a)
console.log(this.a)
console.log(global.b)
//this.c - representa exportar esta variavel para fora do arquivo
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca, sem var e let
// Qdo fazemos isso estamos criando diretamente na variavel global - Node
abc = 3
console.log(global.abc)


//modulo.exports = {e:456, f: false, g:"teste"}

//SEMPRE QUE POSSIVEL FUJA DO ESCOPO GLOBAL
//NÃO COLOQUE VARIAVEIS NO ESCOPO GLOBAL 
//CONST PODE SER GLOBAL MAS O MELHOR É FAZER DENTRO DE ESCOPO DE OBJETO