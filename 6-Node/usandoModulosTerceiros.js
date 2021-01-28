// é muito comum usarmos o _ para referenciarmos a biblioteca Lodash
// neste caso nao precisamos utilizar o caminho relativo, pois por padrão ele vai buscar dentro da pasta nodeModule
const _ = require("lodash")
setInterval(()=> console.log(_.random(1, 4000)), 20000)