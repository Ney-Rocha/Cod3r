'// o endereço do required não é case sensitive, apenas no linux, porém este é mais de 90% dos servidores
const moduloA = require('../../moduloA')
console.log(moduloA.ola)

//sem precisa do caminho realtivo ele busca dentro da mesma pasta o arquivo index.js
const saudacao = require('saudacao')
console.log(saudacao.ola)

//importar pasta, ele busca o arquivo index.js padrão₢/?°
const c =  require('./pastaC')
console.log(c.ola2)


//modulos previamente instalado com node (modulos core)
//nao precisa de caminho relativo somente o nome do modulo
const http = require('http')
http.createServer((req, res) =>{
   res.write('Bom dia!')
   res.end()
}).listen(8080)
