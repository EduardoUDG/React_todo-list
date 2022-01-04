import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';


const App = () => {
  const [tasks, updateTasks] = useState([
    {
        id: new Date().getTime(),
        text: 'Wash the clothes',
        completed: false
    },
    {
        id: new Date().getTime(),
        text: 'record the tutorial',
        completed: false
    }
  ]);

  return (
    <div className='contenedor'>
      <Header/>
      <TaskForm tasks={tasks} updateTasks={updateTasks} />
    </div>
  );
}

export default App;
