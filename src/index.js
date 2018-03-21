import React from 'react';
import ReactDOM from 'react-dom';
import store from './store'
import Root from './components/root'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
