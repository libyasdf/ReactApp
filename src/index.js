import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import "normalize.css";
import "antd/dist/antd.css";

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
