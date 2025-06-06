import type { Todo } from "../models/Todo";


type TodoPresentationProps = {
  todo: Todo;
  removeTodo: (id: number) => void
  toggleDone: (id: number) => void
};

export const TodoPresentation = ({ todo, removeTodo, toggleDone }: TodoPresentationProps) => {
  return (
    <li className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow p-4 flex flex-col gap-2">
        <p className="text-xs italic text-left text-slate-500">
          Created at:{' '}
          {new Date(todo.createdAt).toLocaleString("sv-SE", 
        {
          year: 'numeric', 
          month: 'long',
          day: 'numeric',
        })}
        </p>
        <div className="flex items-center justify-between gap-2">
          <h2 
          className={`text-base md:text-lg ${todo.done ? "line-through text-slate-400" : "text-slate-900"} flex-1`}> 
          - {todo.content}
          </h2>
          <button 
          className="text-xl hover:scale-110 transition-transform"
          aria-label="Mark as done"
          onClick={() => toggleDone(todo.id)}>
          {todo.done ? "Undo" : "Done"} 
          </button> 
          <button 
          className="text-xl hover:scale-125 transition-transform" 
          aria-label="Delete task"
          onClick={() => removeTodo(todo.id)}> 🗑️</button>
        </div>   
    </li>
  );
};
