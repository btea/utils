const rollup = require('rollup');
const format = process.argv[2] || 'iife';

const file = format === 'iife' ? 'out.js' : `out.${format}.js`

const inputOptions = {
    input: './index.js'
};

const outputOptions = {
    file,
    format
}

async function build() {
    const bundle = await rollup.rollup(inputOptions)
    if (format === 'iife') {
        outputOptions.name = 'btea'
    }
    const {code, map} = await bundle.generate(outputOptions)
    
    await bundle.write(outputOptions)
}
build()
