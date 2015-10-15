import { createElement as elem } from 'react';
import { render } from 'react-dom';
import App from './App';

render(elem(App, { message: 'Welcome' }), document.getElementById('app'));
