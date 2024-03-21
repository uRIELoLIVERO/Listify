import React from 'react'
import '../styles/TodoCreate.css'
import { TodoContext } from './TodoContext'


function TodoCreate() {
  const {
    canvasRef,
    troughConfetti,
    modalState,
    addTodo} = React.useContext(TodoContext)

  const [inputValue, setInputValue] = React.useState('')
  const onTyping = (event) => {
    setInputValue(event.target.value)
  }
  
  const onSubmit = (event) => {
    event.preventDefault()
    addTodo(inputValue)
    setInputValue('')
  }

  return (
    <div className='container-create'>
      <h2>Create new task</h2>
      <form className='container-create-inputs'
        onSubmit={onSubmit}>
        <input 
        value={inputValue}
        onChange={onTyping}
        placeholder='Name of the new task'/>
        <canvas className='canvas' ref={canvasRef}/>
        <button type="submit" onClick={() => troughConfetti(!modalState)}>Create</button>
      </form>
    </div>
  )
}
export { TodoCreate }