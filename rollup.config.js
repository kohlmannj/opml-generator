import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

const extensions = ['.js', '.ts']

const plugins = [resolve({ extensions }), commonjs(), babel({ extensions })]

/** @type {import('rollup').RollupOptions[]} */
export default [
  {
    input: 'src/index.ts',
    external: ['xml'],
    plugins,
    output: [
      { format: 'cjs', file: 'dist/index.cjs.js' },
      { format: 'es', file: 'dist/index.esm.js' },
    ],
  },
  {
    input: 'examples/src/index.ts',
    external: ['xml'],
    plugins,
    output: [
      { format: 'cjs', file: 'examples/dist/index.cjs.js' },
      { format: 'es', file: 'examples/dist/index.esm.js' },
    ],
  },
]
