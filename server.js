import express from 'express';
import { resolve } from 'path';
const app = express();

app.use(express.static(resolve('./dist')));

app.get('/', (req, res)=>{
    res.sendFile(resolve('./app/index.html'));
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('App running on port 3000');
});
