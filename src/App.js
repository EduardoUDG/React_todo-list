import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';


const App = () => {

  // Save task in localStorage
  const tasksSaved = localStorage.getItem('tasks') ?
                      JSON.parse(localStorage.getItem('tasks')) 
                      : [] ;
  const [tasks, updateTasks] = useState( tasksSaved );
  useEffect(()=>{
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);


  // Save state of tasks completed
  const saveTasksCompleted = localStorage.getItem('showTasksCompleted') ?
                             JSON.parse(localStorage.getItem('showTasksCompleted'))
                             : true;
  const [showTaskCompleted, updateShowTaskCompleted] = useState(saveTasksCompleted);
  useEffect(()=>{
    localStorage.setItem('showTasksCompleted', showTaskCompleted.toString());
  }, [showTaskCompleted]);

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
