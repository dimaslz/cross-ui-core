const fs = require('fs');
const path = require('path');
const shelljs = require('shelljs');

const nodeModulesDir = path.resolve(`${__dirname}/node_modules`);

function renameCssVarPrefix(css, prefix) {
  return css.replace(/--tw-/g, `--${prefix}-`);
}

function cleanCSS(css) {
  return css.replace('@tailwind utilities; ', '');
}

function moveSCSS() {
  shelljs.mkdir('./dist/scss');
  shelljs.mkdir('./dist/scss/components');

  shelljs.cp('./src/assets/css/variables.scss', './dist/scss/variables.scss');
  shelljs.cp(
    './src/components/button/button.scss',
    './dist/scss/components/button.scss',
  );
  shelljs.cp(
    './src/components/input-text/input-text.scss',
    './dist/scss/components/input-text.scss',
  );
  fs.writeFileSync(
    path.resolve(`${__dirname}/dist/scss/components/components.scss`),
    `@import '~tailwindcss/utilities.css';
@import 'button.scss';
@import 'intput-text.scss';`,
  );
}

function getVariables(css) {
  const originalUtilitiesCSS = fs.readFileSync(
    path.resolve(`${nodeModulesDir}/tailwindcss/dist/utilities.css`),
    'utf8',
  );

  let match = originalUtilitiesCSS.match(
    new RegExp('\\*\\s*\\{[^\\}]+\\}', 'gm'),
  );
  if (match) {
    let variables = match.join('\n');
    variables = variables
      .replace(/\n/gm, '')
      .replace(/\s+--/gm, '--')
      .replace(/\s+\{/gm, '{')
      .replace(/\s+/gm, ' ');

    return `${variables} ${css}`;
  }

  return css;
}

async function run() {
  console.log('👨‍💻 Making some last fixes...');
  const cssOrigin = fs.readFileSync(
    path.resolve(`${__dirname}/dist/cross-ui/cross-ui.css`),
    'utf8',
  );

  let cssUpdated = cssOrigin;
  cssUpdated = getVariables(cssUpdated);
  cssUpdated = renameCssVarPrefix(cssUpdated, 'cui');
  cssUpdated = cleanCSS(cssUpdated);

  fs.writeFileSync(
    path.resolve(`${__dirname}/dist/cross-ui/cross-ui.css`),
    cssUpdated,
  );

  moveSCSS();
}

run();
