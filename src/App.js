import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


const App = () => {
  const [tasks, updateTasks] = useState([
    {
      id: 1,
      text: 'A sinmple task',
      completed: false
    },
    {
      id: 2,
      text: 'A sinmple task 2',
      completed: true
    }
  ]);

  return (
    <div className='contenedor'>
      <Header/>
      <TaskForm tasks={tasks} updateTasks={updateTasks} />
      <TaskList tasks={tasks} updateTasks={updateTasks}/>
    </div>
  );
}

export default App;
