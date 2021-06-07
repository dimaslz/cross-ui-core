module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.tsx'],
    // options: {
    //   whitelist: ['w-full'],
    // },
  },
  // prefix: 'cui-',
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
};
