import './TodoItems.css'
function TodoItem({text}){
 
    return (
      <li>
        <span className='positive'>V</span>
        <p> {text}</p>
        <span className='negative'>X</span>
      </li>
    );
  }
export { TodoItem };