import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import App from './src/app';
import './src/styles/styles.scss';

const store = configureStore();
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,

    document.getElementById('app')
);