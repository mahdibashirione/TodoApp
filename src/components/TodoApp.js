import { useRef } from "react";
import { useState } from "react";
import Todo from "./Todo/Todo";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import { BiFolderPlus } from "react-icons/bi";

import { BiMenuAltLeft } from "react-icons/bi";
import { BiMessageError } from "react-icons/bi";

const TodoApp = () => {
  const [todo, setTodo] = useState([])
  const formTask = useRef()

  const addToTodo = (color, input, date, time, type) => {
    setTodo([...todo, {
      color,
      text: input,
      date,
      time,
      color,
      text: input,
      date,
      time,
      type,
      id: Math.floor(Math.random() * 100),
      isCheck: false
    }])
    formTask.current.classList.replace('absolute', 'hidden')
  }

  const removeHandler = (id) => {
    const filterTodo = todo.filter(todo => todo.id !== id)
    setTodo(filterTodo)
  }

  const checkHandler = (id) => {
    const index = todo.findIndex(todo => todo.id === id)

    const itemTodo = { ...todo[index] }
    itemTodo.isCheck = !itemTodo.isCheck;

    const allTodo = [...todo]
    allTodo[index] = itemTodo;

    setTodo(allTodo)
  }

  const ShowFormTaskHandler = () => {
    formTask.current.classList.replace('hidden', 'absolute')
  }

  return (
    <div className="w-full">
      <div className="fixed top-0 w-full bg-white px-4 py-3 flex justify-between items-center">
        <div>
          <BiMessageError className="text-2xl cursor-pointer" />
        </div>
        <div>
          <span className="text-bold font-sans text-xl">Task Manager</span>
        </div>
        <div>
          <BiMenuAltLeft className="text-3xl cursor-pointer" />
        </div>
      </div>
      <div className="w-full bg-white px-4 py-3 flex justify-between items-center">
        <div>
          <BiMessageError className="text-2xl cursor-pointer" />
        </div>
        <div>
          <span className="text-bold font-sans text-xl">Task Manager</span>
        </div>
        <div>
          <BiMenuAltLeft className="text-3xl cursor-pointer" />
        </div>
      </div>
      <div className="container p-4">
        <TodoForm inShow={formTask} addToTodo={addToTodo} />
        <TodoList
          todo={todo}
          remove={removeHandler}
          check={checkHandler}
        />
      </div>
      <div className="fixed bottom-0 w-full h-20 flex items-center justify-center">
        <button onClick={ShowFormTaskHandler} className="bg-zinc-900 text-white font-sans text-md py-3 px-4 rounded-full flex items-center">
          Add Task
          <BiFolderPlus className="mr-2 text-xl" />
        </button>
      </div>
    </div>
  );
}

export default TodoApp;