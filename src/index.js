import React from 'react';
import ReactDOM from 'react-dom';
import store from './store1';
import { Provider } from './react-redux1';
import Counter1 from './components/Counter1'


ReactDOM.render(
<Provider store={store}>
<Counter1></Counter1>
</Provider>  
, document.querySelector('#root'));