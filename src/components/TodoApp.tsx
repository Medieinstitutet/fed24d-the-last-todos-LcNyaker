import { useState } from "react"
import { Todo } from "../models/Todo" 
import { TodoList } from "./TodoList"
import { AddTodo } from "./AddTodo"

export const TodoApp = () => {

    const [todos, setTodos] = useState<Todo[]>(localStorage.getItem("savedTodos") ? JSON.parse(localStorage.getItem("savedTodos")as string) : [ 
        new Todo ("Vakna", false ),
        new Todo ("Jobba", false ),
        new Todo ("Hämta på förskola", false ),
        new Todo ("Laga middag", false ),
        new Todo ("Leka", false ),
        new Todo ("Koda", false )])
        
    
    const addTodo = (t: Todo) => {
        setTodos([...todos, t])
        localStorage.setItem("savedTodos", JSON.stringify([...todos, t]))
    }

    const deleteTodo = (id: number) => { 
        setTodos(todos.filter(t => t.id !== id)) 
        localStorage.setItem("savedTodos", JSON.stringify(todos.filter(t => t.id !== id)))
    }

    const toggleTodo = (id: number) => {
        setTodos(todos.map((t) => t.id === id ? {...t, done: !t.done } : t))
        localStorage.setItem("savedTodos", JSON.stringify(todos.map((t) => t.id === id ? {...t, done: !t.done } : t )))
    }
    

    return (
        <section className="flex flex-col items-center px-6 py-8 md:py12 max-w-4xl mx-auto gap-8">  
            <div className="text-center">
                <p className="text-4xl md:text-6xl font-bold text-slate-900 mb-2">TaskMaster</p>
                <h1 className="text-lg md:text-2xl text-slate-700" >Master your day, one task at a time..</h1>
            </div>
            <div>
                <div>    
                    <AddTodo
                    addTodo={addTodo}/>
                </div>
                <div>
                    <TodoList 
                    todos={todos} 
                    removeTodo={deleteTodo} 
                    toggleDone={toggleTodo}/> 
                </div>
            </div>    
        </section>
    ) 
}

