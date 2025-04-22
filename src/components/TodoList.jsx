import { useState } from "react"

const TodoList = () => {
    const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: true },
    { id: 3, text: 'Style with Tailwind', completed: false },
    ])
    const [showCompleted, setShowCompleted] = useState(true)
    const handleClick = () => setShowCompleted(!showCompleted)

  return (
    <div className="p-6 bg-white border shadow-md rounded m-4 max-w-md mx-auto">
        <h3 className="text-lg font-semibold mb-4">Todo List</h3>
        <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600" onClick={handleClick}>
            {showCompleted ? 'Hide Completed' : 'Show Completed'}
        </button>
        <ul className="space-y-2">
            {
                todos.map(todo => (
                    (showCompleted || !todo.completed) && (
                        <li key={todo.id} className={`p-2 border-b ${todo.completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                            {todo.text}
                        </li>
                    )
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList