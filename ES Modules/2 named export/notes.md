
Exportamos uma variável ou função e, ao importar, devemos colocar o mesmo nome.
-É possível ter múltiplos exports



// utils.js
export const today = Date.now()


// exportando um valor já existente
const double = number => number * 2
export { double }



// exportando diversos
export { today, double }



// main.js
import { today } from './utils.js'
