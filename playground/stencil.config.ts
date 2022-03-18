import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';

import { default as ENV } from "./env";

const isGithub = process.env.ENV === 'github';

const APP_URL = process.env.APP_URL || ENV.APP_URL;

export const config: Config = {
  globalStyle: './src/assets/main.scss',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: isGithub ? APP_URL : `http://localhost:4001/`,
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
