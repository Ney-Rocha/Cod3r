// json é um formato tetxtual super simples que exibe e gera dados, talvez seja o  mais usado atualmente no mundo da programação
// Qdo você trabalha no padrão soap ele usa o XML é um formato muito complexo e verboso que trabalha com eskemas que precisam ser respeitado com toda seus detalhes, por isso o mundo da programação trabalha muito fortemente com o Json.
// a Principal diferença entre Objeto e o Json é que no Json nao suporta funções (metódos)
//Sendo assim se um objeto for transformado em Json a função deixará de existir nesta mutação

const obj = {a: 1, b:2, c:3, soma(){return a + b + c }}
// Transformando um objeto num JSON
console.log(JSON.stringify(obj))

//Transformando um JSON num Objeto
// Não pode estar sem aspas
// console.log(JSON.parse("{a: 1, b:2, c: 3}"))
// Não pode estar com aspas simples dentro do objeto convertido
// console.log(JSON.parse("{'a': 1, 'b':2, 'c':' 3}"))
// A conversão para objeto exibe aspa duplas em cada item sendo assim precisamos usar o envelope com aspas simples
console.log(JSON.parse('{"a": 1, "b":2, "c": 3}'))
console.log(JSON.parse('{"a": 1.4, "b":"string", "c": true, "d": {"a": 1,"c": 1,"b": 1}, "e": [1,2,3]}'))
