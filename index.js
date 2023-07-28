import * as fsPromises from 'node:fs/promises'
import prompt from 'prompt'
import { readdir } from 'node:fs/promises'

console.log('Welcome to the terminal, Earthling!')
console.log('Please enter a number to view the artwork.')

prompt.message = 'Plase choose an artwork'
prompt.delimiter = ': '
prompt.start()

const choice = {
  name: 'choice',
  hidden: false,
  message: 'Enter artwork number',
}

try {
  let idx = 1
  const files = await readdir('./data')
  for (const file of files) console.log(idx++, file)
} catch (err) {
  console.error(err)
}

async function main() {
  const result = await prompt.get(choice)
  // do something with `result`
  let userInput = result.choice

  // make conditionals
  if (userInput === 'q') {
    try {
      let idx = 1
      const files = await readdir('./data')
      for (const file of files) console.log(idx++, file)
    } catch (err) {
      console.error(err)
    }
  } else if (userInput === 1 || userInput === '1') {
    console.log(await fsPromises.readFile('./data/kea.txt', 'utf-8'))
  } else if (userInput === 2 || userInput === '2') {
    console.log(await fsPromises.readFile('./data/kiwi.txt', 'utf-8'))
  } else if (userInput === 3 || userInput === '3') {
    console.log(await fsPromises.readFile('./data/manaia.txt', 'utf-8'))
  } else if (userInput === 4 || userInput === '4') {
    console.log(await fsPromises.readFile('./data/nikau.txt', 'utf-8'))
  } else if (userInput === 5 || userInput === '5') {
    console.log(await fsPromises.readFile('./data/pohutukawa.txt', 'utf-8'))
  } else {
    console.log('Please enter a valid number.')
  }
}

// run the async main function and catch any errors
main().catch((err) => {
  // if an error was thrown, show it in the console
  console.error(err)
  // ... then set the exit code to any non-zero integer
  process.exitCode = 1
})

// [x] Welcome message
// [x] display list of artworks
// [x] how to receive user input?
// [x] make conditional for the user input (switch or if)
// [x] when a user enters a number, an artwork will be displayed.
// stretch:
// []
