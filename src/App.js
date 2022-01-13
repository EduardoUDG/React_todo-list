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

  const [showTaskCompleted, updateShowTaskCompleted] = useState(false);

  return (
    <div className='contenedor'>
      <Header 
        updateShowTaskCompleted={updateShowTaskCompleted}
        showTaskCompleted={showTaskCompleted}
        />
      <TaskForm tasks={tasks} updateTasks={updateTasks} />
      <TaskList 
        tasks={tasks} 
        updateTasks={updateTasks}
        showTaskCompleted={showTaskCompleted}
      />
    </div>
  );
}

export default App;
