import './App.css';
import Add from './Compontens/AddItem/Add';
import Weather from './Compontens/Weather/Weather'
import Task from './Compontens/Task/Task';
import {PendingContext} from './Context/PendingContext';
import {DoneContext} from './Context/DoneContext'
import {DeletedContext} from './Context/DeletedContext'
import { useContext } from 'react';
import Corona from './Compontens/Corona/Corona';
import Quotes from './Compontens/Quotes/Quotes';

function App() {
  const {pendingTodos} = useContext(PendingContext)
  const {doneTodos} = useContext(DoneContext)
  const {deletedTodos} = useContext(DeletedContext)
  return (
    <div className="app">

      <div className="mainHeading">
        <h1>ToDo App</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Weather />
          <Quotes/>
        </div>
        <div className="col-md-4">
          <Add />
        </div>
        <div className="col-md-4">
            <Corona/>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Task toDos={pendingTodos} title='Pending ToDos' />
        </div>
        <div className="col-md-4">
          <Task toDos={doneTodos} title='Done ToDos' />
        </div>
        <div className="col-md-4">
          <Task toDos={deletedTodos} title='Deleted ToDos' />
        </div>
      </div>
    </div>
  );
}

export default App;