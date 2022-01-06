import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


const App = () => {
  const [tasks, updateTasks] = useState([]);

  return (
    <div className='contenedor'>
      <Header/>
      <TaskForm tasks={tasks} updateTasks={updateTasks} />
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
