import React from 'react'
import '../styles/TodoFilter.css'
import { TodoContext } from './TodoContext'

function TodoFilter() {  
  const {
    findValue,
    setFindValue} = React.useContext(TodoContext)
    
  return (
    <div className='container-filter'>
    <h2 className='subtitle-h2-filter'>Search for a task by name</h2>
      <div>
      <ion-icon name="search-sharp"></ion-icon><input placeholder='type task name' value={findValue} onChange={(event) => {setFindValue(event.target.value)}}/>
      </div>
    </div>
  )
}

export { TodoFilter }

