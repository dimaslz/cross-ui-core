'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-d6493af4.js');

/*
 Stencil Client Patch Esm v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["app-home_2.cjs",[[1,"app-home"],[1,"cross-button",{"ui":[1025],"color":[1],"size":[1],"circle":[4],"square":[4],"pill":[4],"fullWidth":[4,"full-width"],"disabled":[4],"selected":[4],"type":[1]},[[2,"click","onClickHandler"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
