const a = 1
const b = 2
const c = 3

const obj1 ={a:a, b:b, c:c}
const obj2 = { a, b, c}

console.log(obj1, obj2)

//Criação de atributos de objeto a partir de variaveis

const nomeAttr = 'nota'
const valorAttr = 7.5
const obj3 = {}
obj3[nomeAttr] = valorAttr


const obj4 ={[nomeAttr]:valorAttr}
console.log(obj3, obj4)

//Criação de metodos(funcões) de objetos de forma literal

const obj5 ={
    //funcão expressa forma antiga
    funcao1: function(){
        //...
    },

    //função novo modelo ES6 forma literal
    // Neste modelo nao precisamos declarar 'nome da função:'
    funcao2(){
        //...
    }
}