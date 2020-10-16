module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.tsx', './src/**/*.scss'],
    options: {
      whitelistPatterns: [],
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
};
