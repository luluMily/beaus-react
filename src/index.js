import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BeerContainer from './components/beer-container';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BeerContainer />, document.getElementById('root'));
registerServiceWorker();
