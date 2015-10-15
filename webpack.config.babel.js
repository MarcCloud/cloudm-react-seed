import webpack from 'webpack';
import { resolve } from 'path';

export default {
    devtool: '#sourcemap',
    entry: [
        'webpack-hot-middleware/client',
        './app/index.js'
    ],
    output: {
        path: resolve(__dirname + '/dist/scripts'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: resolve(__dirname + '/app')
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    }
};
