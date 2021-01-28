// função em JS é first-class Objject (Citizens)
//higher-order function
//Linguagem multiparadigma- Funcional/ OO / procedural

//criar de forma literal
function fun1 (){ }

//Armazenar em uma variavel
const fun2 = function (){}

// armazenar num array
const array =[ function (a, b){ return a + b}, fun1, fun2]

// Arnazenar em um atributo de objeto
const obj ={ }
obj.falar = function() { return ("opa")}
console.log(obj.falar())

//Criando função como param
function run(fun){
    fun()
}

// uma função pode retornar /conter ourra função
function soma(a, b) {
    return function(c){
        console.log(a +b + c)
    }
}
soma(2, 3)(4)
//teste git