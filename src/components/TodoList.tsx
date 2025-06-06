import { useState, type ChangeEvent } from "react"
import { TodoPresentation } from './TodoPresentation'
import type { Todo } from "../models/Todo"
import type { SortOption } from "../models/SortOption"

type TodoListProps = {
    todos: Todo[];
    removeTodo: (id: number) => void
    toggleDone: (id: number) => void
}

export const TodoList = ({ todos, removeTodo, toggleDone }: TodoListProps) => {

    const [SortOption, setSortOption] =useState<SortOption>("all")

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
            setSortOption(e.target.value as SortOption)
        }
    
     const SortTodos = () => {
        if (SortOption === "done") {
            return todos.filter(t => t.done)
        }
        if (SortOption === "undone") {
            return todos.filter(t => !t.done)
        }
        if (SortOption === "content") {
            return [...todos].sort((a, b) => a.content.localeCompare(b.content))
        }
        return todos
    } 
    

    return (
        <>
            <div className="flex flex-col md:flex-row justify-items-end items-center gap-2 mt-6 w-full max-w-xl">
                <label 
                    htmlFor="sort" 
                    className="text-slate-500">
                        Sortera:
                </label>
                <select 
                    className="p-2 rounded border border-slate-300 focus-outline-none"
                    id="sort"
                    value={SortOption}
                    onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="done">Done</option>
                    <option value="undone">Undone</option>
                    <option value="content">Alphabetical Order</option>
                </select>
            </div>
            <ul className="flex flex-col gap-4 mt-4 w-full">
                {SortTodos().map((t) =>(
                    <TodoPresentation todo={t} key={t.id} 
                    removeTodo={removeTodo}
                    toggleDone={toggleDone}
                    />
                ))
                }
            </ul>
        </>
    )
}