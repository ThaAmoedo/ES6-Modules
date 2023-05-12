
Poderemos usar um default export por arquivo e um (ou mais) named export.


//utils.js
const date = new Date()
const greeting = name => `hello ${name}`


export default function (argument) {
console.log(date, greeting(argument))
}

export { date, greeting }



// main.js
import funcaoPadrao, { date, greeting } from './utils.js'
