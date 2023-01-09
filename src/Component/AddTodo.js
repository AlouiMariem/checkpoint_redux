import React, { useState } from 'react'
import { Button, Form, FormControl } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { addtodo } from '../redux/actions/ActionsTodos';

const AddTodo = () => {
const [task,setTask]= useState("");
const dispatch=useDispatch();
const handleSubmit = (e) => {
    e.preventDefault();
    if(task){
    dispatch(addtodo(task));
    setTask("");
    }
}
  return (
    <Form style={{display:"flex",width:"40%",margin:"50px auto"}} onSubmit={handleSubmit}>
        <FormControl 
        type="text" 
        value={task} 
        placeholder="Enter your task"
        onChange={e=>setTask(e.target.value)}/>
        <Button type="submit">ADD</Button>
    </Form>
  )
}

export default AddTodo