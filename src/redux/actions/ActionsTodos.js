import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../types"

export const deleteTodo = (id) => {
    return {
        type: DELETETODO,
        payload: id,
    };
}
export const donetodo = (id) => {
    return {
        type: DONETODO,
        payload: id,
    };
}
export const edittodo = (id,task) => {
    return {
        type: EDITTODO,
        payload: {id,task},
    }; 
}  
export const addtodo = (task) => {
    return {
        type: ADDTODO,
        payload: task,
    }; 
}