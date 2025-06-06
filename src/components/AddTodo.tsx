import { Todo } from "../models/Todo"
import { useState, type ChangeEvent, type FormEvent } from "react"


type AddTodoProps = {
  addTodo: (t: Todo) => void
}

export const AddTodo = ({ addTodo }: AddTodoProps) => {

  const [todo, setTodo] = useState<Todo>( new Todo ("", false))


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "text") {
      setTodo({...todo, [e.target.id]: e.target.value })
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault() 

    if (!todo.content.trim()) {
      return
    }
    addTodo(todo);

    setTodo(new Todo ("", false))

  }
  return (
    <>
      <form
      className="bg-white p-4 md:p-6 rounded-xl shadow-md flex flex-col gap-4 w-full max-w-xl" 
      onSubmit={handleSubmit}>
        <h2 className="text-center text-lg font-semibold text-slate-800">
          What Needs Doing?
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center w-full">
          <div className="flex flex-col w-full">
            <label
            className="text-slate-600" 
            htmlFor="content"> Task: </label>
            <input
            className="p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400" 
            type="text"
            id="content"
            value={todo.content} 
            onChange={handleChange}
            />
          </div>
          <button
          className="bg-blue-600 text-white rounded px-6 h-12 font-semibold transition-all duration-300 hover:bg-blue-700 hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100."
          aria-label="Add task"
          disabled={!todo.content.trim()}>
          Add Task
          </button>
        </div>
      </form>
    </>
  )

}