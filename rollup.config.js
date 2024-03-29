import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/ScrollProgress.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/ScrollProgress.js',
      format: 'umd',
      name: 'ScrollProgress',
      plugins: [filesize()]
    },
    {
      file: 'dist/ScrollProgress.min.js',
      format: 'umd',
      name: 'ScrollProgress',
      plugins: [terser(), filesize()]
    },
  ],
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    })
  ]
};
