import React from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from '../components/TodoContext';

import '../styles/App.css';

// localStorage.removeItem('TASKLIST_V1')

// const defaultTasks = [
//   { text: 'Entregar trabajo final', completed:false},
//   { text: 'Entregar trabajo final', completed:false},
//   { text: 'Entregar trabajo final', completed:false},
//   { text: 'Entregar trabajo final', completed:false},
//   { text: 'Entregar trabajo final', completed:true},
// ]

// localStorage.setItem('TASKLIST_V1', JSON.stringify(defaultTasks))

function App() {
  return(
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  )
}

export default App;

/* para importar un componente podemos darle doble click a un modulo y entonces
ctrl + space y de haber un archivo js con el mismo nombre podemos darle click o tab 
para importarlo rapidamente */