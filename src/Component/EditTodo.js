import React, { useState } from 'react';
import { FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { edittodo } from '../redux/actions/ActionsTodos';
import {useDispatch} from "react-redux"

function EditTodo({ todo }) {
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const [task,setTask]= useState (todo.task);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleEdit =()=>{
   dispatch(edittodo(todo.id,task));
   handleClose()
  }
  return (
    <>
      <Button style={{background : "#aaf683"}} onClick={handleShow}>
        EDIT
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormControl type="text" value={task} onChange={(e) => setTask(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTodo;