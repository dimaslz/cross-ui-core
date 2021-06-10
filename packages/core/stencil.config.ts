import { Config } from '@stencil/core';

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
  nodeResolve: {
    preferBuiltins: true,
  },
};
