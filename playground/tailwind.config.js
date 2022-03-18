module.exports = {
  content: [
    './src/components/**/*.tsx',
    './src/components/**/*.scss',
    './src/assets/**/*.scss',
    './src/global/**/*.scss'
  ],
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
