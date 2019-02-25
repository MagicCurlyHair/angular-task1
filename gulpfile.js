const { series, parallel } = require('gulp');
const { lintJs, compileJs, compileSass, injectBundles } = require('./gulp/build');
const { watchJs, watchSass, watchHtml, hotReload } = require('./gulp/hotReload');

exports.default = series(
    parallel(
        lintJs,
        compileJs,
        compileSass
    ),
    injectBundles,
    parallel(
        watchJs,
        watchSass,
        watchHtml,
        hotReload
    )
);
