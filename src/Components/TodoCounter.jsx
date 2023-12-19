import React from 'react'

function TodoCounter({ total, completed }) {
  return (
 
         <h1>Haz completado {completed} de {total} ToDos</h1>
 
  )
}

export {TodoCounter};