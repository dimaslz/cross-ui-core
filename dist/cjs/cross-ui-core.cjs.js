'use strict';

const index = require('./index-a18e00ee.js');

/*
 Stencil Client Patch Browser v2.0.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('cross-ui-core.cjs.js', document.baseURI).href));
    const opts =  {};
    if ( importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["cross-button_2.cjs",[[1,"cross-button",{"ui":[1025],"color":[1],"size":[1],"circle":[4],"square":[4],"pill":[4],"fullWidth":[4,"full-width"],"disabled":[4],"selected":[4],"type":[1]}],[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
