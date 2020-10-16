import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import { sass } from '@stencil/sass';
import cssnano from 'cssnano';
import purgecss from '@fullhuman/postcss-purgecss';
import { version } from './package.json';

export const config: Config = {
  namespace: 'cross-ui-core',

  buildEs5: false,
  extras: {
    cssVarsShim: false,
    dynamicImportShim: false,
    safari10: false,
    scriptDataOpts: false,
    shadowDomShim: false,
  },
  globalStyle: 'src/style.scss',
  // outputTargets: [
  //   {
  //     type: 'dist',
  //     esmLoaderPath: '../loader',
  //   },
  //   {
  //     type: 'docs-readme'
  //   },
  //   {
  //     type: 'www',
  //     serviceWorker: null, // disable service workers
  //     baseUrl: 'http://localhost:3333'
  //   },
  //   {type: 'dist-hydrate-script'}
  // ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-custom',
      generator: (docs: any) => {
        docs = Object.assign(docs, { version });
      },
    },
    {
      type: 'docs-json',
      file: './dist/components.json',
    },
    {
      type: 'docs-vscode',
      file: './dist/custom-elements.json',
    },
    {
      type: 'www',
      serviceWorker: undefined, // disable service workers,
    },
  ],
  plugins: [
    sass({}),
    postcss({
      plugins: [
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-nested'),
        autoprefixer(),
        ...(process.env.NODE_ENV === 'production'
          ? [
              purgecss({
                content: ['./src/components/**/*.tsx', './src/components/**/*.scss'],
                defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
                safelist: {
                  // standard: [/red$/],
                  // deep: [/blue$/],
                  greedy: [/w-full|w-\d{2}/],
                },
              }),
              cssnano(),
            ]
          : []),
      ],
    }),
  ],
  nodeResolve: {
    preferBuiltins: true,
  },
};
