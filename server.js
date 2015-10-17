import express from 'express';
import { resolve } from 'path';

const app = express();
const env = process.env.NODE_ENV || 'development';

if (env === 'development'){
    const webpack = require('webpack');
    const config = require('./webpack.config.babel.js');
    const compiler = webpack(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: config.output.publicPath
    }));
    console.log('Dev mode hot reload');
    app.use(require('webpack-hot-middleware')(compiler,{
        log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
    }));
}


app.use(express.static(resolve('./dist')));

app.get('/', (req, res)=>{
    res.sendFile(resolve('./app/index.html'));
});

app.get('/api', (req, res)=>{
    res.json({ message: 'Hello from the API'});
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('App running on port 3000');
});
