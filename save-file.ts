import * as fs from 'fs'
import * as yargs from 'yargs'

const argv = yargs
  .alias('f', 'filename')
  .alias('c', 'content')
  .demandOption('filename')
  .demandOption('content')
  .argv

fs.writeFile(2, argv.content, (error) => {
  if (error) throw error
  console.log(`File ${argv.filename} saved with success.`)
})

