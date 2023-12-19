 
import './App.css';
import  { TodoCounter } from './Components/TodoCounter.jsx';
import { TodoFilter } from './Components/TodoFilter.jsx';
import { TodoList } from './Components/TodoList.jsx';
import { TodoItem } from './Components/TodoItems.jsx';
import { ButtonCreate } from './Components/ButtonCreate.jsx';
function App() {
  return(
    <div className='App'>
    <TodoCounter completed={16} total={25}/> 
    <TodoFilter/>
    <TodoList>
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    </TodoList>
    <ButtonCreate/> 
    </div>
  )
}
 
export default App;
