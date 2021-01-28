// uma função é sempre uma ação por isso o nome deve sempre ser um verbo
//função é um trecho/bloco de codigo que executa alguma tarefa e pode ser chamada em varios momentos
//recebe os ingredientes (parametros processa e devolve alguma coisa)
//uma função pode nao receber nada 

//Função sem Retorno
function imprimeSoma( a, b){
  console.log(a + b)
}

imprimeSoma(2,3)
imprimeSoma(2) //-  Retorna Nan
imprimeSoma(2,3,4,5,6,7,8)// sem formalismo lê os parametros declarado e ignora os demais

//Função com retorno
function soma(a, b  = 1){
  return a + b
} //'= 1' tratatamento de valor, aplica um valor padrão qdo não é passado nenhum parametro

console.log(soma(2,3))
console.log(soma(4)) //utilizou o valor padrão