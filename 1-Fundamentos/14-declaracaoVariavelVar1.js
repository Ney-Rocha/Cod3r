// Declaração de  variavel com var

//variavel em JS fica visivel em qualquer lugar mesmo qdo dentro de um bloco, 
//exceto dentro de um scopo de função
{
  {
    {
      {var sera = 'Será???'}
    }
  }
}


/*evite criar variaveis de scopo globais
pode ser substcrita á qualquer momento*/
console.log(sera)

function teste(){
  var local =123
  console.log(local)
}

teste()
// console.log(local)
