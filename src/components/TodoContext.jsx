import React from 'react'
import { useLocalStorage } from '../hooks/UseLocalStorage';
import { useConfettiScreen } from '../hooks/useConfettiScreen';

const TodoContext = React.createContext()

function TodoProvider( {children}) {
    const {
        item: tasks, 
        saveItem: saveTasks,
        loading,
        error} = useLocalStorage('TASKLIST_V1', [])
    
    const {
      confettiRef,
      canvasRef } = useConfettiScreen()

      const [findValue, setFindValue] = React.useState('')
      const [modalState, setModalState] = React.useState(false)

      const completedTodos = tasks.filter((todo) => !!todo.completed).length
      const allTodos = tasks.length;
    
      const searchedTodos = tasks.filter((todo) =>  {
        const taskText = todo.text.toLowerCase()
        const searchTask = findValue.toLocaleLowerCase()
        return taskText.includes(searchTask)})
    
      const handleCheckboxChange = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        saveTasks(updatedTasks);
      };
      
      const toggleModal = (estadoModal) => {
        setModalState(!estadoModal)
      }

      const troughConfetti = (state) => {
        state && (
          confettiRef.current.addConfetti({
            confettiRadius: 5,
            confettiNumber: 300,
          })
        )
        toggleModal(modalState)
      }
      
      const removeTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        saveTasks(updatedTasks);
      };

      const addTodo = (text) => {
        const updatedTasks = [...tasks]
        updatedTasks.push({
          text: text,
          completed: false
        })
        saveTasks(updatedTasks)
      }

  return (
    <TodoContext.Provider value={{
        findValue,
        setFindValue,
        completedTodos,
        allTodos,
        searchedTodos,
        handleCheckboxChange,
        removeTask,
        loading,
        error,
        modalState,
        setModalState,
        canvasRef,
        troughConfetti,
        toggleModal,
        addTodo
    }}>
        {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }