import './App.css';
import Add from './Compontens/AddItem/Add';
import Weather from './Compontens/Weather/Weather'
import Task from './Compontens/Task/Task';
import {PendingContext} from './Context/PendingContext';
import {DoneContext} from './Context/DoneContext'
import {DeletedContext} from './Context/DeletedContext'
import { useContext } from 'react';

function App() {
  const {pendingTodos} = useContext(PendingContext)
  return (
    <div className="app">

      <div className="mainHeading">
        <h1>ToDo App</h1>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Weather />
        </div>
        <div className="col-md-4">
          <Add />
        </div>
        <div className="col-md-4">

        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <Task toDos={pendingTodos} />
        </div>
        <div className="col-md-4">
          <Task toDos={[]}/>
        </div>
        <div className="col-md-4">
          <Task toDos={[]}/>
        </div>
      </div>
    </div>
  );
}

export default App;