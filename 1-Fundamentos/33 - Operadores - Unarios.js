let num1 = 1
let num2 = 2

//forma pós fixada
num1++
console.log(num1)

//forma pré fixada
--num1
console.log(num1)


//neste caso prevaleca a precedencia (estilo regra de sinais matematicos)
//o sinal antes (pré fixed) acontece antes do pós fixed
//ex: pré fixed executado, comparação feita, somente depois é decrementado, ou useja, no momento da comparação a decrementação ainda nao foi feita.
console.log(++num1 === num2--)

// depois disso a comparação ja nao dará o mesmo resultado
console.log(num1 === num2)

//por isso é importante pensar bem antes de escrever um codigo e evitar um tipo de código como o exemplo acima.

