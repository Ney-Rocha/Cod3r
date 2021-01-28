//Par chave valor; nome valor, identificador valor

//contexto léxico (local onde foi definida no código)
//que local fisico do seu codigo aquele par  nome valor foi definido

const saudacao ='opa' // contexto léxico
//uma funcão define um contexto, um local mais restrito
function exec(){
  const saudacao = ' legal'// contexto léxico 2
  return saudacao // se achar ja exibe se nao achar procura no contexto global
}

//objetos são grupoos aninhados de pares nome/valor
const cliente ={
  nome:'Pedro',
  idade:32,
  peso: 90,
  endereço:{
    logradouro: 'Rua Joao da Silva',
    Numero: 123,
  }
}

console.log(saudacao)
console.log(cliente)