import { createElement as elem } from 'react';
import { render } from 'react-dom';
import App from './App';

render(elem(App, { message: 'Welcome' }), document.getElementById('app'));

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function () {
        console.log('hot dispossed');
    });
}