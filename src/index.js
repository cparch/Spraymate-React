import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux'
import reducer from './store/reducer';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

const app = (
	<Provider store ={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
