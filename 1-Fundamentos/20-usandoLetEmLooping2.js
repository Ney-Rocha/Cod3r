const funcs = []

for (let i = 0; i<10; i++){
  funcs.push(function(){
    console.log(i)
  })
}
//uma funcao em JS tem conciencia de onde ela foi escrita
//let tem scopo de bloco pór isso consegue ser acessada/ alcançada
funcs[2]()
funcs[8]()

