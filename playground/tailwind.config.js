module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/components/**/*.tsx',
      './src/components/**/*.scss',
      './src/assets/**/*.scss',
      './src/global/**/*.scss'
    ],
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
