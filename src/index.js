import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import AppContext from './components/AppContext';
import AppHOC from './components/AppHOC';
import AppRouter from './components/AppRouter';
import AppAPI from './components/AppAPI';
import AppGraphQL from './components/AppGraphQL';
import AppRedux from './components/AppRedux';

import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { reducer } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducer);

root.render(
<Provider store={store}>
    <AppRedux />
</Provider>
);