import React, { useState } from 'react';
import styles from './TodoForm.module.css';

const TodoForm = ({ addTodo }) => {
  const [input, setinput] = useState('')

  const handleSubmit = e => {
    addTodo(input)
    e.preventDefault();
    setinput('')
  }
  return (
    <form className={ styles.todoForm } onSubmit={ handleSubmit }>
        <input 
          onChange={ev => setinput(ev.target.value)} 
          className={ styles.todoInput } 
          placeholder='Add a todo'
          value={ input }
        />
        <button className={ styles.todoButton }>
          Add Todo
        </button>
    </form>
  )
}

export default TodoForm;
