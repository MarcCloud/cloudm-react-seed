import test from 'blue-tape';
import { createElement as elem } from 'react';
import skin from 'skin-deep';
import App from '../app/App';

test('App should render a basic hello message in an h1 element', expect =>{
    const vdom = skin.shallowRender(elem(App, {message: 'hello'})).findNode('h1');
    expect.equal(vdom.type, 'h1');
    expect.equal(vdom.props.children, 'hello');
    expect.end();
});
