import React from 'react'
import '../styles/TodoCount.css'
import { TodoContext } from './TodoContext'
import { TodoLoading } from './TodoLoading';

function TodoCount(){
    const {
      completedTodos,
      allTodos,
      loading} = React.useContext(TodoContext)

      return (
        <div>
          <h2 className='TodoSubtitle subtitle-sticky'>To-do List</h2>
          {allTodos === 0 && loading === false? (
            <div className='container-withoutTask'>
              <ion-icon name="sad-sharp"></ion-icon>
              <h3>Aun no haz creado ninguna tarea!</h3>
            </div>
          ) : completedTodos === allTodos && completedTodos ? (
            <h3 className='subtitle-sticky'> You've just completed all your tasks 🥳👏🏻 </h3>
          ) : (
            <h3 className='subtitle-sticky'> You've completed <span>{completedTodos}</span> out of <span>{allTodos}</span> to-dos </h3>
          )}
        </div>
      );
  }
export { TodoCount }