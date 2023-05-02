import { useState } from "react"
import "./App.css"

export default function App() {
  // State
  const [todos,setTodos] = useState([])

  const [newTodo, setNewTodo] = useState("")

  // Behaviours
  const handleChange = (event) => {
    setNewTodo(event.target.value)   
  } 

  const handleAdd = (e) => {
    e.preventDefault()
    const todosCopy = [...todos]
    const id = new Date().getTime()
    const name = newTodo
    todosCopy.push({id,name})
    setTodos(todosCopy) 
    setNewTodo("")
  }

  const handleDelete = (id) => {
    const todosCopy = [...todos]
    const todosCopyUpdated = todosCopy.filter(todo => todo.id !== id)
    setTodos(todosCopyUpdated)
  }

  // Render
  return(
    <>
      <div>
        <h1>Ma super todo list</h1>
        <form action="submit" onSubmit={handleAdd}>
          <input type="text" placeholder="Type your todo here" onChange={handleChange} value={newTodo} required/>
          <button>+</button>
        </form>
      </div>
      <div>
        <ul>
          {todos.map(todo => 
            <li key={todo.id}>
              {todo.name}
              <button onClick={() => handleDelete(todo.id)}>x</button>
            </li>)}
        </ul>
      </div>
    </>
  )
}
