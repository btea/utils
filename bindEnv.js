const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const format = process.argv[2] || 'iife';
module.exports = {
    name: 'bindEnv',
    setup(build) {
        build.onLoad({ filter: /\.*/ }, async args => {
            let js = fs.readFileSync(args.path, 'utf-8');
            js = esbuild.transformSync(js, {
                format
            });
            return {
                contents: js.code
            };
        });
        build.onEnd(result => {
            if (format === 'iife') {
                const name = format === 'iife' ? 'out.js' : `out.${format}.js`;
                const p = path.join(__dirname, name);
                const val = fs.readFileSync(p, 'utf-8');
                const res = val.replace('require_utils();', 'window.zys = require_utils();');
                fs.writeFileSync(p, res, 'utf-8');
            }
        });
    }
};
