// Função arrow foi introduzida no ecma script 2015
// O objetivo é ter menos linhas de códigos e algumas exclusividades 

// Modo tradicional
let dobro = function (a){
    return 2 * a
}

//Modelo arrow function
//arrow function sempre é anonima
// Precisa estar sempre ser declarada junto com uma variavel para ser chamada posteriormente
dobro = (a) => { return 2 * a }

//forma mais simplificada sem as chaves
dobro2 = a => 2 * a //return implicito
console.log(dobro(Math.PI))

let ola = function(){
    return 'Óla'
}

ola = () => 'Olá'
// o Underline representa um parametro vazio, mas pode ser preenchido na chamada da funçao
ola = _ => 'Olá'
console.log(ola())