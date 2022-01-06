import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faEdit, faTimes  }    from '@fortawesome/free-solid-svg-icons'

const Task = ({ task={} }) => {
    return (
        <li className='lista-tareas__tarea'>
            <FontAwesomeIcon 
                icon={faCheckSquare} 
                className='lista-tareas__icono lista-tareas__icono-check'
            />

            <p className='lista-tareas__texto'>
                { task.text }
            </p>
            <div className='lista-tareas__contenedor-botones'>
                <FontAwesomeIcon 
                    icon={faEdit} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                />
                <FontAwesomeIcon 
                    icon={faTimes} 
                    className='lista-tareas__icono lista-tareas__icono-accion'
                />
            </div>
        </li>
    );
}
 
export default Task;