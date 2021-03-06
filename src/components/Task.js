import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faSquare, faTimes  }    from '@fortawesome/free-solid-svg-icons'

const Task = ({ task={}, toggleCompleted, editTask, deleteTask }) => {
    const [ editingTask, changeEditingTask ] = useState(false);
    const [ newTask, changingTask ] = useState( task.text);

    const handleSubmit = e => {
        e.preventDefault()
        editTask( task.id, newTask );
        changeEditingTask(false);
    };

    const  deletingTask= () => {
        deleteTask(task.id);
    }

    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon 
                icon={ task.completed ? faCheckSquare : faSquare } 
                className='lista-tareas__icono lista-tareas__icono-check'
                onClick={() => toggleCompleted(task.id)}
            />
            <div className='lista-tareas__texto'>
                {   editingTask ?
                    <form className='formulario-editar-tarea' onSubmit={ handleSubmit }>
                        <input 
                            type='text' 
                            className='formulario-editar-tarea__input' 
                            value={ newTask }
                            onChange={ (e) => changingTask( e.target.value ) }
                        />
                        <button 
                            type='submit'
                            className='formulario-editar-tarea__btn'
                        >
                            Actualizar    
                        </button>                        
                    </form>
                    : task.text 
                }
            </div>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={ () => changeEditingTask(!editingTask) }
                />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                    onClick={deletingTask}
                />
            </div>
        </li>
    );
}
 
export default Task;