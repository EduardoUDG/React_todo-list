import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash }      from '@fortawesome/free-solid-svg-icons'


const Header = ({ showTaskCompleted, updateShowTaskCompleted }) => {

    const toggleCompleted = () => {  
      updateShowTaskCompleted( !showTaskCompleted );
    }

    return (
      <header className='header'>
          <h1 className='header__titulo'>Todo list</h1>
          { (showTaskCompleted) ?
            <button className='header__boton' onClick={ toggleCompleted }>
              No mostrar completadas
              <FontAwesomeIcon 
                icon={faEyeSlash}
                className='header__icono-boton'
              />
            </button>
            :        
            <button className='header__boton' onClick={ toggleCompleted }>
              Mostrar completadas
              <FontAwesomeIcon 
                icon={faEye}
                className='header__icono-boton'
              />
            </button>
          }

      </header>  
    );
}

export default Header;