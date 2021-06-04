// import { postcss } from '@stencil/postcss';
// import autoprefixer from 'autoprefixer';

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/components/**/*.tsx', './src/components/**/*.scss', './src/assets/**/*.scss', './src/global/**/*.scss'],
    options: {
      whitelistPatterns: [/-(leave|enter|appear)(|-(to|from|active))$/, /^(?!(|.*?:)cursor-move).+-move$/, /^router-link(|-exact)-active$/],
    },
  },
  theme: {
    extend: {},
  },
  variants: {},
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  // plugins: [
  //   postcss({
  //     plugins: [
  //       require('tailwindcss')('./tailwind.config.js'),
  //       require('postcss-nested'),
  //       autoprefixer(),
  //       ...(process.env.NODE_ENV === 'production'
  //         ? [/* purgecss */, require('cssnano')]
  //         : [])
  //     ]
  //   })
  // ]
};
