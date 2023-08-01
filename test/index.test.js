import { test, expect } from 'vitest'

import { add, addSlowly, read, promptComment } from './testing.js'

// It can be quite fiddly to write tests that check what gets sent to the console, so we're not going to do that now. Instead, we should focus on testing your functions
// that read and write files.

// One approach might be to create a very simple test file. Call it test.txt (or similar). Put a simple string inside, and keep it inside your tests directory so it
// doesn't have anything to do with the main program.

// This should let you test some of your functions. For example, you could check that the:

// string returned from your read function is the same as the one you put in test.txt
// number of lines in a file has changed after you write to it (hint: count the newline \n characters)
// file has no lines in it after your delete comments function runs (might need to use a different test file for that one)
// If you're writing a test that changes something on the filesystem, be sure to return the state of whatever you change to normal at the end of the test. If you're having
// trouble writing your tests, remember to reach out for help sooner rather than later. Be kind to yourself, and don't expect to understand everything right away.

//
test('1 + 3', () => {
  expect(add(1, 3)).toBe(4)
})

// async function
test('add 5+5 async', async () => {
  let actual = await addSlowly(5, 5)
  expect(actual).toBe(10)
})

// test functions that read and write files

test('test setup working', () => {
  expect(true).toBeTruthy()
})

// async readFile

test('test readFile kea.txt', async () => {
  const fsPromises = require('fs').promises
  let expected = await fsPromises.readFile('./data/kea.txt', 'utf-8')
  let actual = await read()
  expect(actual).toBe(expected)
})
