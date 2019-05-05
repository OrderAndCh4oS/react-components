const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        filename: "index.js",
        library: 'OrderAndChaosReactComponents',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|dist)/,
                use: {
                    loader: 'babel-loader',
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader", // creates style nodes from JS strings
                    "css-loader", // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    externals: {
        '@orderandchaos/styles': {
            'commonjs': '@orderandchaos/styles',
            'commonjs2': '@orderandchaos/styles',
        },
        'react': {
            'commonjs': 'react',
            'commonjs2': 'react',
        },
        'react-dom': {
            'commonjs': 'react-dom',
            'commonjs2': 'react-dom',
        },
        'react-router-dom': {
            'commonjs': 'react-router-dom',
            'commonjs2': 'react-router-dom',
        }
    }
};
