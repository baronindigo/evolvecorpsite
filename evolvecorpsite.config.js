const path = require('path');
const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        main : [ 
            path.resolve(__dirname, 'css/src/main.scss'), 
        ],
    },
    output: {
        path: path.resolve(__dirname, 'css/dist'),
        publicPath: 'css/dist',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].css',
                            context: './',
                            outputPath: '../../css/dist/',
                            publicPath: '../../css/dist/'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: isDevelopment,
                            url: false
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }
        ]
    }
};
