import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodosList() {
    const todos=useSelector(state=>state.todosReducer.todos)
  return (
    <div>
        {
  
            todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo}/>)
            )
         
        }
    </div>
  )
}

export default TodosList