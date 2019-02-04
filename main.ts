import { fatorial } from './fatorial'

console.log('==== n-fatorial ===')

const argv = require('yargs').demandOption('num').argv

const num = argv.num

console.log(`The factorial of ${num} is iqual ${fatorial(num)}`)

console.log(module.paths)