import React from 'react'
import './TodoCounter.css'
function TodoCounter({ total, completed }) {
   
  return (
           
         <h1 className='todo-Counter'>
          Haz completado <span>{completed}</span> de <span>{total}</span> ToDos
          </h1>
 
  )
}

export {TodoCounter};