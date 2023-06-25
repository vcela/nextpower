
export const revalidate = 60

const fetchTodos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos")
  const data = await res.json()
  return data
}

export default async function Home() {
  const todos = await fetchTodos()

  return (
    <main>
      <h1>Staticly generated</h1>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </main>
  )
}
