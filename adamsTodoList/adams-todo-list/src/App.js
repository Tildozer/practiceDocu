import React from "react"
import { default as TodoForm } from './components/TodoForm.jsx';
import styles from './App.module.css';

function App() {
  const addTodo = id => {
    
  }
  return (
    <div className={ styles.todoApp }>
      <h1>Hello world</h1>
      <TodoForm addTodo={ addTodo }/>
    </div>
  )
}

export default App;
