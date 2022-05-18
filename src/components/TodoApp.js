import { useRef } from "react";
import { useState } from "react";
import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import { BiFolderPlus } from "react-icons/bi";

import Search from "./Search/Search";
import { useEffect } from "react";
import FilterType from "./FilterType/FilterType";
import { confirm } from "react-confirm-box";
import Navbar from "./Navbar/Navbar";

import { useTranslation } from "react-i18next";


const TodoApp = () => {
  const [t, i18n] = useTranslation()
  const [todo, setTodo] = useState([])
  const [filterTodo, setFilterTodo] = useState([])
  const [filterType, setFilterType] = useState("")
  const [check, setCheck] = useState({ value: '', label: t("All") })
  const [search, setSearch] = useState('')

  const formTask = useRef()

  useEffect(() => {
    filterCompleted(check)
    if (filterType) {
      filterCompleted(check)
    }

    if (todo.length) {
      localStorage.setItem("todoLocal", JSON.stringify(todo))
    }
  }, [todo, check, search, filterType])

  useEffect(() => {
    const itemLocal = JSON.parse(localStorage.getItem("todoLocal"))
    if (itemLocal) {
      setTodo(itemLocal)
    }
  }, [])

  const searchChangeHandler = (e) => {
    setSearch(e.target.value)
  }

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
      type: type,
      id: Math.floor(Math.random() * 100),
      isCheck: false
    }])
    formTask.current.classList.replace('absolute', 'hidden')
  }

  const removeHandler = (id) => {
    if (window.confirm("آیا میخواهید آن را حذف کنید؟")) {
      const filterTodo = todo.filter(todo => todo.id !== id)
      setTodo(filterTodo)
      if (todo.length == 1) {
        localStorage.clear("todoLocal")
      }
    }
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

  const filterCompleted = (status) => {
    switch (status.value) {
      case "": {
        if (!search.length) {
          if (filterType !== "") {
            setFilterTodo(todo.filter(t => t.type === filterType))
          } else {
            setFilterTodo(todo)
          }
        } else {
          setFilterTodo(todo)
          setFilterTodo(filterTodo.filter(t => t.text.includes(search)))
        }

        break
      }
      case "true": {
        if (!search.length) {
          setFilterTodo(todo.filter(t => t.isCheck))
        } else {
          setFilterTodo(todo.filter(t => t.isCheck))
          setFilterTodo(filterTodo.filter(t => t.text.includes(search)))
        }
        break
      }
      case "false": {
        if (!search.length) {
          setFilterTodo(todo.filter(t => !t.isCheck))
        } else {
          setFilterTodo(todo.filter(t => !t.isCheck))
          setFilterTodo(filterTodo.filter(t => t.text.includes(search)))
        }
        break
      }
    }
  }

  const checkCompletedHandler = (e) => {
    setCheck(e)
    filterCompleted(check)
  }

  return (
    <div className="w-full ">
      <TodoForm inShow={formTask} addToTodo={addToTodo} />
      <Navbar />
      <Search
        filterCompleted={filterCompleted}
        checkHandler={checkCompletedHandler}
        checkState={check}
        searchState={search}
        onChangeHandler={searchChangeHandler}
      />
      <FilterType
        setType={setFilterType}
        type={filterType}
      />
      <div className="container">
        <TodoList
          todo={filterTodo}
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