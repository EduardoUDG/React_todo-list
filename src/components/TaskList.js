import React from 'react';
import Task from './Task';


const TaskList = ({ tasks=[], updateTasks }) => {

    const toggleCompleted = ( id ) => {
        updateTasks( tasks.map( task => {
            return ( task.id === id ) 
            ? { ...task, completed: !task.completed }
            : task;
        }));
    }

    return (
        <ul className='lista-tareas'>
            { (tasks.length > 0 ) 
                ? tasks.map( task => {
                    return <Task 
                                key={task.id}
                                task={task}
                                toggleCompleted={toggleCompleted}
                            />
                })
                : <div className='lista-tareas__mensaje'>No hay tareas agregadas</div>
            }
        </ul>
    );
}
 
export default TaskList;