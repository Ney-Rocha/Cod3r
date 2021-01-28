//toda as vezes que faço uma comparação o resultado é sempre True  ou False


console.log('01}', '1' == 1) //igual comparando, apenas  valor
console.log('02}', '1' === 1) // estriutamente igual, comparando valor e tipo
console.log('03}', '3' != 3)//diferente, comparando apenas valor
console.log('04}', '3' !== 3)//estrictamente diferente, comparando valor e tipo

console.log('05}', 3 < 2)//menor que
console.log('06}', 3 > 2)//maior que
console.log('7}', 3 <= 2) //menor igual
console.log('8}', 3 >= 2) // maior igual

const d1 = new Date(0)
const d2 = new Date(0)
// comparando endereços de memoria, sempre dará falso
console.log('9}', d1 == d2)
console.log('10}', d1 === d2)
// comparando numeros fornecidos pela data
console.log('11}', d1.getTime() === d2.getTime())
console.log('12}', undefined == null)
console.log('13}', undefined === null)

