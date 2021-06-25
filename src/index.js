import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PendingTodo from './Context/PendingContext';

ReactDOM.render(
  <React.StrictMode>
    <PendingTodo>
    <App />
    </PendingTodo>
  </React.StrictMode>,
  document.getElementById('root')
);


