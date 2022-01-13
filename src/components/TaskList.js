import React from 'react';
import Task from './Task';


const TaskList = ({ tasks=[], updateTasks, showTaskCompleted }) => {

    const toggleCompleted = ( id ) => {
        updateTasks( tasks.map( task => {
            return ( task.id === id ) 
            ? { ...task, completed: !task.completed }
            : task;
        }));
    }

    const editTask = ( id, newTaskText ) => {
        updateTasks( tasks.map( task => {
            return ( task.id === id ) 
            ? { ...task, text: newTaskText }
            : task;
        }));
    }

    const deleteTask = ( id ) => {
        updateTasks( tasks.filter( task => task.id !== id) );
    }

    return (
        <ul className='lista-tareas'>
            { (tasks.length > 0 ) 
                ? tasks.map( task => {
                    if( showTaskCompleted ) {
                        return <Task 
                                    key={task.id}
                                    task={task}
                                    toggleCompleted={toggleCompleted}
                                    editTask={editTask}
                                    deleteTask={deleteTask}
                                />
                    // Si la tarea no está completada, la devolvemos
                    } else if ( !task.completed ) {
                        return <Task 
                                    key={task.id}
                                    task={task}
                                    toggleCompleted={toggleCompleted}
                                    editTask={editTask}
                                    deleteTask={deleteTask}
                                />

                    }
                    return false;
                })
                : <div className='lista-tareas__mensaje'>No hay tareas agregadas</div>
            }
        </ul>
    );
}
 
export default TaskList;