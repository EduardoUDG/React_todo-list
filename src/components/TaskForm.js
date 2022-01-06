import React, { useState } from 'react';
import { v4 as uuidv4 }    from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare }    from '@fortawesome/free-solid-svg-icons'

const TaskForm = ({ tasks=[], updateTasks}) => {
    const [ taskInput, updateTaskInput] = useState('');

    const handleInput = e => {
        updateTaskInput( e.target.value );
    }

    const handleSubmit = e => {
        e.preventDefault();
        
        updateTasks([ 
            ...tasks,
            {
            id: uuidv4(),
            text: taskInput,
            completed: false
            }
        ]);
    }

    return (
        <form action='' className='formulario-tareas' onSubmit={handleSubmit}>
            <input 
                type='text'
                className='formulario-tareas__input'
                placeholder='Write one task'
                value={taskInput}
                onChange={handleInput}
            />
            <button type='submit' className='formulario-tareas__btn'>
                <FontAwesomeIcon icon={ faPlusSquare } className='formulario-tareas__icono-btn'/>
            </button>
        </form>
    );
}
 
export default TaskForm;