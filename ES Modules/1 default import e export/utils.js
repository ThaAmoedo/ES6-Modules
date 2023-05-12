

// utils.js
const message = "mensagem" // essa variável fica isolada nesse arquivo, e não consigo usar ela em outro lugar
alert(message)

export default message




//opç 2
/*
export default 'um texto qualquer'
*/

//opç 3
/*
const text = "Texto"
export default text
*/



//opç 4
/*
const text = "Texto"
const message = "Outro Texto"
export {text, message} 

// OU em vez de exportar em lista...

export const text = "Texto"
export const message = "Outro Texto"
*/
