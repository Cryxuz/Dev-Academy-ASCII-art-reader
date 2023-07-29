import * as fsPromises from 'node:fs/promises'
import prompt from 'prompt'
import { readdir } from 'node:fs/promises'

console.log(
  'Welcome to the terminal, Earthling! \nPlease enter a number to view the artwork. \npress q to quit \npress c to comment \npress v to read comments \npress d to delete comments'
)

const choice = {
  name: 'choice',
  hidden: false,
  message: 'Enter artwork number or a valid command',
}

// prompt message
async function promptMsg() {
  prompt.message = ''
  prompt.delimiter = ': '
  prompt.start()
}
await promptMsg()
// exit terminal = q
async function exit() {
  console.log('Exiting terminal..Goodbye')
  setTimeout(() => {
    console.clear()
  }, '2500')
}
// delete comments
async function delComments() {
  fsPromises.writeFile('comments.txt', '')
}
// display options
async function display() {
  try {
    let idx = 1
    const files = await readdir('./data')
    for (const file of files) console.log(idx++, file)
  } catch (err) {
    console.error(err)
  }
}
await display()

// testing prompt for comments

async function promptComment() {
  const comments = {
    name: 'comment',
    hidden: false,
    message: 'Enter comment',
  }
  const resultComment = await prompt.get(comments)
  prompt.message = 'Enter comment'
  prompt.delimiter = ': '
  prompt.start()

  fsPromises.appendFile('./comments.txt', '\n user:' + resultComment.comment)
}
async function readComments() {
  console.log('comments: ', await fsPromises.readFile('comments.txt', 'utf-8'))
}

// file directory
let fileDir = [
  await fsPromises.readFile('./data/kea.txt', 'utf-8'),
  await fsPromises.readFile('./data/kiwi.txt', 'utf-8'),
  await fsPromises.readFile('./data/manaia.txt', 'utf-8'),
  await fsPromises.readFile('./data/nikau.txt', 'utf-8'),
  await fsPromises.readFile('./data/pohutukawa.txt', 'utf-8'),
]

//
// main function
//

async function main() {
  try {
    const result = await prompt.get(choice)
    // do something with `result`
    let userInput = result.choice

    // conditionals
    switch (userInput) {
      case 'q':
        await exit()
        break
      case 'v':
        await readComments()
        break
      case 'c':
        await promptComment()
        break
      case 'd':
        await delComments()
        break
      case '1':
        console.log(fileDir[0])
        break
      case '2':
        console.log(fileDir[1])
        break
      case '3':
        console.log(fileDir[2])
        break
      case '4':
        console.log(fileDir[3])
        break
      case '5':
        console.log(fileDir[4])
        break
      default:
        console.log('Please enter a valid number.')
        break
    }
  } catch (err) {
    console.log(err)
  }
}
main()

//

// [x] Welcome message
// [x] display list of artworks
// [x] how to receive user input?
// [x] make conditional for the user input (switch or if)
// [x] when a user enters a number, an artwork will be displayed.
// stretch:
// [x] command q = clear console
// [x] command c = comment
// [x] command v = view comments
// refactor conditionals to switch
// refactor file dir in switch
