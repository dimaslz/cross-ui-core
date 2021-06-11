import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';

export const config: Config = {
  namespace: 'cross-ui',
  globalStyle: './src/assets/css/components.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [
    sass({
      injectGlobalPaths: [
        './src/assets/css/tailwind.scss',
        './src/assets/css/variables.scss',
        // './src/components/**/*.scss'
      ],
      // injectGlobalPaths: [
      //   'src/assets/css/tailwind.scss',
      //   'src/assets/css/variables.scss',
      //   'src/components/button/button.scss'
      // ],
    }),
    postcss({
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        autoprefixer(),
      ]
    })
  ],
};
