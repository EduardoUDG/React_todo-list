import React from 'react';
import Task from './Task';


const TaskList = ({ tasks=[] }) => {
    return (
        <ul className='lista-tareas'>
            { (tasks.length > 0 ) 
                ? tasks.map( task => <Task key={task.id} task={task}/>)
                : <div className='lista-tareas__mensaje'>No hay tareas agregadas</div>
            }
        </ul>
    );
}
 
export default TaskList;