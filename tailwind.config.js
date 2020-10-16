// import { postcss } from '@stencil/postcss';
// import autoprefixer from 'autoprefixer';

module.exports = {
  purge: false,
  theme: {
    extend: {},
  },
  variants: {},
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
