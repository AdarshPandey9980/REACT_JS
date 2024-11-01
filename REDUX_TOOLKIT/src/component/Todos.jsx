import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/Todo/todoSlice'

const Todos = () => {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

  return (
   <>
   <div>Todos</div>
   {
    todos.map((todo) => (
        <li key={todo.id}>
            {todo.text || 'hello'}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
    ))
   }
   </>
  )
}

export default Todos