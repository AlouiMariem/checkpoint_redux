import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, donetodo } from '../redux/actions/ActionsTodos'
import EditTodo from './EditTodo'


const TodoItem = ({todo}) => {
  const dispatch = useDispatch()
  const handleDelete=()=>{
    if (window.confirm('Are you sure !')){
      dispatch(deleteTodo(todo.id))
    }
  }
  return (
    <div style={{display:"flex",justifyContent:"space-around",width:"50%",margin:"30px auto"}}>
     
      <Card style={{width:"60%",background:"#ffd97d",}}><h5 style={{textDecoration: todo.done? "line-through" : "none"}}>{todo.task}</h5></Card>
      
      <Button style={{background:"#60d394"}} onClick={() => dispatch(donetodo(todo.id))}>
        {todo.done? "NOT DONE" : "DONE"}
      </Button>
      <EditTodo todo={todo} />
      <Button style={{background:"#ee6055"}} onClick={handleDelete}>DELETE</Button>
     
    </div>
  )
}

export default TodoItem