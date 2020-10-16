'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-a18e00ee.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["cross-button_2.cjs",[[1,"cross-button",{"ui":[1025],"color":[1],"size":[1],"circle":[4],"square":[4],"pill":[4],"fullWidth":[4,"full-width"],"disabled":[4],"selected":[4],"type":[1]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
