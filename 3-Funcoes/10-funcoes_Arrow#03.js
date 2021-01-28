
  let comparaComThis = function (param){
      console.log(this === param)
  }

  //global no navegador é o objeto window
  comparaComThis(global)

  const obj ={}

  comparaComThis = comparaComThis.bind(obj)
//   busca o objeto global
  comparaComThis(global)
//busca o objeto do contexto lexico 'obj"
  comparaComThis(obj)

  let comparaComThisArrow = param => console.log(this===param)
  comparaComThisArrow(global)
  comparaComThisArrow(module.exports)

  comparaComThisArrow = comparaComThisArrow.bind(obj)
  comparaComThisArrow(obj)
  comparaComThisArrow(module.exports)