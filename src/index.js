import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './Navigation/Navigation.js';
import editProfile from './editProfile';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Navigation />, document.getElementById('root'));
serviceWorker.unregister();
