// Sempre que criado um modulo que utiliza a classe ClientRect, significa que ele vai usar outros modulos - convenção
// Para se importar um modulo em JS vc deve utilizar a palavra reservada require
// neste caso vc precisa usar o caminho relativo (pasta e etc)
const moduloA =  require('./moduloA')
const moduloB = require('./moduloB')

// testando a importação
console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA)

console.log(moduloB.bomDia)
console.log(moduloB.boaNoite())
console.log(moduloB)