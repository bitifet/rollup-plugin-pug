/*
  Create a pug-runtime module.

  2018-09-18:amc: using ES6
*/
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'

const __dirname = path.dirname(fileURLToPath(import.meta.url));
    // Borrowed from https://stackoverflow.com/a/62499498/4243912


import { createRequire } from 'node:module'
const require = createRequire(import.meta.url)



const indent = '  '
const prefix = 'export default (function(exports) {\n'
const suffix = `\n${indent}return exports\n})({});\n`

let pugPath = require.resolve('pug-runtime')
let runtime = fs.readFileSync(pugPath, 'utf8')

runtime = runtime.replace(/^(?=[ \t]*\S)/gm, indent)

pugPath = path.join(__dirname, 'dist', 'runtime.es.js')
runtime = prefix + runtime + suffix

fs.writeFileSync(pugPath, runtime, 'utf8')

console.log(`> ${pugPath} written.\n`)  //eslint-disable-line no-console
