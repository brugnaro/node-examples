"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
console.log('==== n-fatorial ===');
const argv = require('yargs').demandOption('num').argv;
const num = argv.num;
console.log(`The factorial of ${num} is iqual ${fatorial_1.fatorial(num)}`);
console.log(module.paths);
//# sourceMappingURL=main.js.map