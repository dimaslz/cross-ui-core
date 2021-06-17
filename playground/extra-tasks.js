const path = require('path');
const shelljs = require('shelljs');

function fixWWW() {
	const from = path.resolve(`${__dirname}/www/cross-ui-core/*`);
	shelljs.cp('-R', from, path.resolve(`${__dirname}/www`));
	shelljs.rm('-rf', path.resolve(`${__dirname}/www/cross-ui-core`));
}
async function run() {
	console.log("👨‍💻 Making some last fixes...")

	fixWWW();
}

run();