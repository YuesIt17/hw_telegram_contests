import React from 'react';
import {render} from 'react-dom';
import {App} from './app';
import {initStore} from './redux/initStore';

const store = initStore();

render(<App store={store} />, document.getElementById('root'));
