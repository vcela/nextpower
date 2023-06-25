"use client"

import { useState, useEffect, use } from "react"

export default function Home() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos")
      const data = await res.json()
      setTodos(data)
    }
    fetchTodos()
  }, [])

  return (
    <main>
      <h1>Staticly generated</h1>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </main>
  )
}
