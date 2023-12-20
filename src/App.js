import React from 'react';
import  { TodoCounter } from './Components/TodoCounter/TodoCounter.jsx';
import { TodoFilter } from './Components/TodoFilter/TodoFilter.jsx';
import { TodoList } from './Components/TodoList/TodoList.jsx';
import { TodoItem } from './Components/TodoItems/TodoItems.jsx';
import { ButtonCreate } from './Components/ButtonCreate/ButtonCreate.jsx';
const defaultToDos = [
  {text: "Hacer ejercicio", completed:true},
  {text: "Leer un libro", completed:false},
  {text: "Estudiar React", completed:false},
  {text: "Estudiar CyberSecurity", completed:false}
]
function App() {
  return(
     <React.Fragment>
    <TodoCounter completed={3} total={defaultToDos.length}/> 
     
    <TodoFilter/>
    <TodoList>
    {
      defaultToDos.map(i=>(
        <TodoItem key={i.text} text={i.text} completed={i.completed}/>
      ))
    }
    </TodoList>
   
    <ButtonCreate/> 
    </React.Fragment>
  )
}
 
export default App;
