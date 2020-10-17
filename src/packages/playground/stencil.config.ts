import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import autoprefixer from 'autoprefixer';
import { sass } from '@stencil/sass';
import { version } from './package.json';

console.log('NODE_ENV', process.env.NODE_ENV);

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
      plugins: [require('tailwindcss')('./tailwind.config.js'), require('postcss-nested'), autoprefixer()],
    }),
  ],
  nodeResolve: {
    preferBuiltins: true,
  },
};
