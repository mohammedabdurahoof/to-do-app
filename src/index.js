import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DeletedTodo from './Context/DeletedContext';
import DoneTodo from './Context/DoneContext';
import PendingTodo from './Context/PendingContext';

ReactDOM.render(
  <React.StrictMode>
    <DeletedTodo>
      <DoneTodo>
        <PendingTodo>
          <App />
        </PendingTodo>
      </DoneTodo>
    </DeletedTodo>
  </React.StrictMode>,
  document.getElementById('root')
);


