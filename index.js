import * as fsPromises from 'node:fs/promises'
import prompt from 'prompt'

console.log('Welcome to the terminal, Earthling!')
console.log('Please enter a number to view the artwork.')
const artOptions = [
  '1: Kea',
  '2: Kiwi',
  '3: Manaia',
  '4: Nikau',
  '5: Pohutukawa',
]
for (let art of artOptions) {
  console.log(art)
}
prompt.message = 'Plase choose an artwork'
prompt.delimiter = ': '
prompt.start()

const choice = {
  name: 'choice',
  hidden: false,
  message: 'Enter artwork number',
}

async function main() {
  const result = await prompt.get(choice)
  // do something with `result`
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
// [] when a user enters a number, an artwork will be displayed. (use if statement or switch??)
//
