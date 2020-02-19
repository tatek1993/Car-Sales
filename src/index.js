import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore } from 'redux';

import { carSaleReducer } from './reducers/carSaleReducer';
import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carSaleReducer);
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, 
rootElement);
