import typescript from 'rollup-plugin-typescript';

export default {
  input: './src/mapFlip.ts',
  output: {
    file: './dist/commonjs/index.js',
    format: 'cjs',
    exports: 'named'
  },
  plugins: [
    typescript({
      emitDeclarationOnly: false
    })
  ]
}