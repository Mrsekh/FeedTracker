// Store config
import  'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';


import {Provider} from 'react-redux';
import reducers from './reducers';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';

const store = createStore( reducers,{},applyMiddleware(reduxThunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,rootElement);