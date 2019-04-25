var path = require('path');
module.exports = {
    entry: {
        index: './src/index.js',
        button: './src/button.js',
        form: './src/form.js',
        structure: './src/structure.js',
        typography: './src/typography.js',
    },
    output: {
        path: path.resolve(__dirname, 'components'),
        filename: "[name].js",
        library: ["ReactComponents", "[name]"],
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /(node_modules|bower_components|build)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
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
            'commonjs2': '@orderandchaos/styles'
        },
        'react': {
            'commonjs': 'react',
            'commonjs2': 'react'
        },
        'react-dom': {
            'commonjs': 'react-dom',
            'commonjs2': 'react-dom'
        },
        'react-router-dom': {
            'commonjs': 'react-router-dom',
            'commonjs2': 'react-router-dom'
        }
    }
};
