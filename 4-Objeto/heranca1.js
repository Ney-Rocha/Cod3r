const ferrari ={
    modelo: 'F40',
    velMax: 320
}

const volvo ={
    modelo: "V40",
    velMax: 200
}

// Object é uma funcão!
// a partir da descriçao underlineunderline nome do objeto underlineunderline
// O JS começa a navegar entre seus ancestrais para encontrar um atributo
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ ===Object.prototype)
console.log(volvo.__proto__ ===Object.prototype)
console.log(Object.prototype.__proto__ === null)

function MeuObjeto(){}
    console.log(typeof Object, typeof MeuObjeto)
    console.log(Object.prototype, MeuObjeto.prototype)