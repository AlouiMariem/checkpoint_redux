import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodosList from './Component/TodosList';
import NavBar from './Component/NavBar';
import AddTodo from './Component/AddTodo';


const App = () => {
  
  return (
    <div className="App">
      <NavBar/> <br/>
      <AddTodo/> <br/>
     <TodosList/>
    </div>
  );
}

export default App;