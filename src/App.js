 
import './App.css';

function App() {
  return(
    <div>
      
    <TodoItem/>
    <TodoItem/>
    <TodoItem/>
    </div>
  )
}
function TodoItem(){
  return (
    <div className="App">
      <span>V</span>
      <p>Leer Lord of the rings</p>
      <span>X</span>
    </div>
  );
}
export default App;
