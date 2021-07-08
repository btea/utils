require('esbuild').buildSync({
    entryPoints: ['index.js'],
    bundle: true,
    loader: { '.js': 'jsx' },
    outfile: 'out.js'
});
