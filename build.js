const bindEnv = require('./bindEnv');
const format = process.argv[2] || '';
let outfile = 'out.js';
if (format) {
    outfile = `out.${format}.js`;
}
require('esbuild').build({
    entryPoints: ['index.js'],
    bundle: true,
    loader: { '.js': 'jsx' },
    plugins: [bindEnv],
    outfile,
    platform: 'neutral',
    format: format || 'iife'
});
