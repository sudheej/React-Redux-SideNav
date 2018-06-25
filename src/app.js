import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { configurestore } from './Redux/store/configureStore'
import { Provider } from 'react-redux'

const store = configurestore()

const jsx = (
    <Provider store = {store}> 
    <AppRouter /> 
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
