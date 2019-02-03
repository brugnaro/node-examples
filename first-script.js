console.log('n-fatorial')

// console.log(`Script processing start directory ${process.cwd()}`)

// process.on('exit', () => {
//   console.log('script is finish soon')
// })

const fatorial = (num) => {
  if (num === 0) {
    return 1
  }

  return num * fatorial(num - 1)
}

const num = parseInt(process.argv[2])

console.log(`The factorial of ${num} is iqual ${fatorial(num)}`)