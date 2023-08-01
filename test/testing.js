import * as fsPromises from 'node:fs/promises'
import prompt from 'prompt'
import { readdir } from 'node:fs/promises'

export function add(a, b) {
  return a + b
}
add(1, 3)

export async function addSlowly(a, b) {
  return a + b
}

export async function read() {
  let fileDir = await fsPromises.readFile('./data/kea.txt', 'utf-8')
  return fileDir
}
