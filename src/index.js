import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';//./ denotes that it is in same directory
//import App from './App';//it is javascript
// import Hello from './Hello'
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
//import {robots} from './robot';
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
