import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/mapFlip.ts',
  output: {
    file: './dist/mjs/index.js',
    format: 'esm'
  },
  plugins: [
    typescript({
      emitDeclarationOnly: false
    })
  ]
}