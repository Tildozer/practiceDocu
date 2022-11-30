import React, { useState } from 'react';
import './todo.css'

const TodoForm = (props) => { 
const [newTodo, setNewTodo] = useState(""); 
const addTodo = props.addTodo;
return (
  <form className="todo-form" onSubmit={ev => {
    ev.preventDefault();
    console.log('new',newTodo)
    addTodo(newTodo);
    setNewTodo('');
  }}>
    <input placeholder='What do you need?'
    value={ newTodo }
    onChange={ev => { 
      let currText = ev.target.value; 
       setNewTodo(currText);
    }} />
    <button>
      Add todo
    </button>
  </form>
  )
}

const TodoList = (props) => {
    console.log("prop", props)
  return <div className="todo-list">
    {
      props.todosList.map((todo, idx) => {
        return <h3 key={ idx }>{todo}</h3>
      })
    }
  </div>
}

const Todo = (props) => {  
  const [todoList, setTodoList] = useState([]);

  function addTodo(todo){
    let copyTodo = [...todoList];
    copyTodo.push(todo);
    setTodoList(todo);
    setTodoList(copyTodo);
  }
      return (
        <div className="todo">
            <h1>Todo List</h1>
            <TodoForm addTodo={ addTodo }/>
            <TodoList todosList ={ todoList }/>
        </div>
  )
}

export default Todo;