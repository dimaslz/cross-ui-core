import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';

// https://stenciljs.com/docs/config

console.log('process.env.NODE_ENV', process.env.NODE_ENV);
export const config: Config = {
  // globalStyle: 'src/global/app.scss',
  globalStyle: 'src/assets/main.scss',
  // globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      // baseUrl: 'https://myapp.local/',
      baseUrl: 'http://localhost:1234/',
    },
  ],
  plugins: [
    sass({
      // injectGlobalPaths: ['src/style.scss'],
    }),
    postcss({
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
        // ...(process.env.NODE_ENV === 'production'
        //   ? [
        //       purgecss({
        //         content: ['./src/components/**/*.tsx', './src/components/**/*.scss', './src/assets/**/*.scss', './src/global/**/*.scss'],
        //         defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
        //         // whitelistPatterns: [
        //         //   /(hover:)?bg-[^-]+-\d{3}/,
        //         //   /(focus:)?bg-[^-]+-\d{3}/,
        //         //   /(focus:)?border-[^-]+-\d{3}/,
        //         //   /(hover:)?border-[^-]+-\d{3}/
        //         // ]
        //       }),
        //       cssnano(),
        //     ]
        //   : []),
      ],
    }),
  ],
  nodeResolve: {
    preferBuiltins: true,
  },
};
