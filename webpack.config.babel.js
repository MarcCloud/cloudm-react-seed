import webpack from 'webpack';
import { resolve, join } from 'path';

export default {
    context: __dirname,
    entry: [
        // Add the client which connects to our middleware
        'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
        // And then the actual application
        './app/index.js'
    ],
    output: {
        path: join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: '#source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: resolve('./app')
        }]
    }
};
