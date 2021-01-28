// tipos boolenaos
//literal

let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!isAtivo)

//verdadeiros
console.log('Os verdadeiros')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!"texto")
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

//verdadeiros
console.log('Os falsos')
console.log(!!0)
console.log(!!"")
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

// no conxto logico você pode utilizar o verdadeiro ou false para mudar este valor
console.log("Pra Finalizar")
console.log(!!(''|| null || 0 || ' '))

let nome = 'Lucas'
console.log(nome || 'Desconhecido')