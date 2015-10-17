import test from 'blue-tape';
import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';
import $ from 'cheerio';
import app from '../app/App';

const createApp = app(React);

test('App should render a basic hello message in an h1 element', expect =>{
    const message = 'hello';
    let content = $('h1', render(createApp({message})));
    expect.ok(content.html().indexOf(message) > -1);
    expect.end();
});
