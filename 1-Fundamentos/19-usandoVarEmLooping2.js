// usando var em looping 2
const funcs = []

for (var i=0; i<10; i++){
  funcs.push(function(){
    console.log(i)
  })
}

//como nao existe escopo de bloco na var todo o resultado so trará o ultimo numero 
//a variavel não é respeitada
funcs[2]()
funcs[8]()