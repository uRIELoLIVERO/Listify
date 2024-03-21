import React from 'react'

import { TodoCount } from '../components/TodoCount'
import { TodoList } from '../components/TodoList'
import { TodoFilter } from '../components/TodoFilter';
import { TodoTask } from '../components/TodoTask';
import { TodoCreate } from '../components/TodoCreate';
import { TodoHeader } from '../components/TodoHeader'
import { TodoLoading } from '../components/TodoLoading';
import { TodoError } from '../components/TodoError';
import { TodoContext } from '../components/TodoContext';
import { Modal } from '../components/Modal';
import { TodoNew } from '../components/TodoNew'

function AppUI() {
    const {
      searchedTodos,
      handleCheckboxChange,
      removeTask,
      loading,
      error,
      modalState} = React.useContext(TodoContext)
    return (
        <div className='main__container'>
    
          <div className='main__container-first'>
            <TodoHeader/>
            <TodoCreate/>

            {modalState && (
              <Modal>
                <TodoNew/>
              </Modal>
            )}
          </div>
    
          <div className='main__container-second'>
            <TodoFilter/>
            <TodoCount className='subtitle-h3'/>
            <TodoList>
              {searchedTodos.length
                ? searchedTodos.map((toDo, index) => (
                  <TodoTask 
                  key={index} 
                  text={toDo.text} 
                  completed={toDo.completed}
                  onToggle={() => handleCheckboxChange(index)}
                  onDelete={() => removeTask(index)}
                  />
                  ))
                : loading
                  ? <TodoLoading/>
                  : error
                    ? <TodoError/> 
                    : <></>}
            </TodoList>
          </div>
        </div>
      );
}

export { AppUI } 