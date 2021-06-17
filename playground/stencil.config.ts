import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
export const config: Config = {
  globalStyle: './src/assets/main.scss',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://dimaslz.github.io/cross-ui-core/',
      dir: 'www'
    },
  ],
  plugins: [
    sass({
      includePaths: [
        './src/assets/variables.scss',
        './src/components/**/*.scss'
      ],
    }),
    postcss({
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
      ],
    }),
  ],
  nodeResolve: {
    preferBuiltins: true,
  },
};
