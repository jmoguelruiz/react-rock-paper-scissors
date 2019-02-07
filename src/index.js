import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore'
import main from './pages/main';
import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <main.Container />
    </Provider>
    , document.getElementById('root'));

