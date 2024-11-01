import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/Todo/todoSlice'

const AddTodo = () => {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <>
    <form onSubmit={addTodoHandler}>
        <input type="text" placeholder='Enter a Todo' value={input} onChange={(e) => setInput(e.target.value)}/>
        <button type='submit'>submit</button>
    </form>
    </>
  )
}

export default AddTodo