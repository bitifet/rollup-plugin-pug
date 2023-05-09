import typescript from 'rollup-plugin-typescript2'
import {readFileSync} from "fs"
const pkgjson = JSON.parse(readFileSync('./package.json'));
//import pkgjson from './package.json' assert { type: "json" };

const external = Object.keys(pkgjson.dependencies).concat(['fs'])
const banner =
`/**
 * rollup-plugin-pug v${pkgjson.version}
 * @author aMarCruz'
 * @license MIT'
 */`

export default {
  input: 'src/index.ts',
  plugins: [
    typescript(),
  ],
  external,
  output: {
    file: pkgjson.main,
    format: 'es',
    banner,
    interop: "default",
  },
}
