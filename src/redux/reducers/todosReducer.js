import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../types";

const initialState={
    todos:[
        {
            id:1, 
            task:"test1",
            done:false
        },
        { 
        id:2,
        task:"test2",
        done:false
        },
        { 
            id:3,
            task:"test3",
            done:false
        },
        
        
    ] 
}
const todosReducer=(state=initialState,action)=>{
    switch (action.type) {
        case DELETETODO:
            return{
                ...state,todos:state.todos.filter((todo) => todo.id!==action.payload),
            };
        case DONETODO:
            return{
                ...state,todos:state.todos.map((todo) => todo.id === action.payload? { ...todo, done: !todo.done } : todo),
            };
         case EDITTODO:
            return{
                ...state,todos:state.todos.map((todo) => todo.id === action.payload.id? { ...todo, task: action.payload.task } : todo),
                };
        case ADDTODO:
            return{
            ...state,
            todos: [...state.todos,{id:Math.random(),task:action.payload,done:false}],
            };
    default : return state;
    }
}
export default todosReducer;