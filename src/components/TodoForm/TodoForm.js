import { useRef } from "react"
import { useState } from "react"
import { AiOutlineCalendar } from "react-icons/ai";
import { BiAlarm } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiLeftArrowAlt } from "react-icons/bi";

const TodoForm = ({ addToTodo, inShow }) => {
  const [color, setColor] = useState("to-purple-500")
  const [input, setInput] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [type, setType] = useState("Work")

  const colorHandler = (e) => {
    setColor(e.target.dataset.color)
  }

  const textHandler = (e) => {
    setInput(e.target.value)
  }

  const dateHandler = (e) => {
    setDate(e.target.value)
  }

  const timeHandler = (e) => {
    setTime(e.target.value)
  }

  const typeHandler = (e) => {
    setType(e.target.textContent)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!input || !time || !date) {
      alert('لطفا تمام فیلد را پر کنید')
      return;
    }

    addToTodo(color, input, date, time, type)
    setColor('to-purple-500')
    setInput('')
    setDate('')
    setTime('')
    setType('Work')
  }

  const closeTask = () => {
    inShow.current.classList.replace("absolute", "hidden")
  }

  return (
    <div ref={inShow} className="z-10 w-[100vw] h-full p-4 pt-0 hidden top-0 right-0 bg-white ">
      <div className="border-b-2 sticky top-0 w-full py-3 bg-white flex justify-between items-center">
        <div className="w-1/3 flex items-center">
        </div>
        <div className="w-1/3 flex items-center justify-center">
          <span className="text-bold font-sans text-xl">New Task</span>
        </div>
        <div onClick={closeTask} className="w-1/3 flex items-center justify-end">
          <BiLeftArrowAlt className="text-3xl cursor-pointer" />
        </div>
      </div>
      <form className="bg-white" onSubmit={submitHandler}>
        <div className="flex flex-col items-end py-2 mt-2 border-b-2 w-full">
          <span className="font-sans text-slate-700 text-md mb-2 ">Color Task</span>
          <div className="p-2 flex justify-end items-center w-full gap-x-2 overflow-scroll">
            <span data-color={'to-red-500'} onClick={colorHandler} className={`w-6 h-6 ring-blue-500 cursor-pointer bg-red-500 rounded-full ring-offset-2 ${color === "to-red-500" && "ring-2"}`}></span>
            <span data-color={'to-green-500'} onClick={colorHandler} className={`w-6 h-6 ring-blue-500 cursor-pointer bg-green-500 rounded-full ring-offset-2 ${color === "to-green-500" && "ring-2"}`} ></span>
            <span data-color={'to-yellow-500'} onClick={colorHandler} className={`w-6 h-6 ring-blue-500 cursor-pointer bg-yellow-500 rounded-full ring-offset-2 ${color === "to-yellow-500" && "ring-2"}`}></span>
            <span data-color={'to-purple-500'} onClick={colorHandler} className={`w-6 h-6 ring-blue-500 cursor-pointer bg-purple-500 rounded-full ring-offset-2 ${color === "to-purple-500" && "ring-2"}`}></span>
            <span data-color={'to-orange-500'} onClick={colorHandler} className={`w-6 h-6 ring-blue-500 cursor-pointer bg-orange-500 rounded-full ring-offset-2 ${color === "to-orange-500" && "ring-2"}`}></span>
            <span data-color={'to-amber-500'} onClick={colorHandler} className={`w-6 h-6 ring-blue-500 cursor-pointer bg-amber-500 rounded-full ring-offset-2 ${color === "to-amber-500" && "ring-2"}`}></span>
            <span data-color={'to-teal-500'} onClick={colorHandler} className={`w-6 h-6 ring-blue-500 cursor-pointer bg-teal-500 rounded-full ring-offset-2 ${color === "to-teal-500" && "ring-2"}`}></span>
            <span data-color={'to-lime-500'} onClick={colorHandler} className={`w-6 h-6 ring-blue-500 cursor-pointer bg-lime-500 rounded-full ring-offset-2 ${color === "to-lime-500" && "ring-2"}`}></span>
            <span data-color={'to-emerald-500'} onClick={colorHandler} className={`w-6 h-6 ring-blue-500 cursor-pointer bg-emerald-500 rounded-full ring-offset-2 ${color === "to-emerald-500" && "ring-2"}`}></span>
          </div>
        </div>
        <div className="flex flex-col items-end py-2 mt-2 border-b-2 w-full">
          <span className="font-sans text-slate-700 text-md mb-2 ">My Task <span className="font-sans text-slate-500 text-sm">(25 character)</span> </span>
          <input value={input} onChange={textHandler} maxLength={"25"} className="w-full text-bold text-lg text-left outline-none" type={"text"} placeholder=".... visit the mather" />
        </div>
        <div className=" relative flex flex-col items-end py-2 mt-2 border-b-2 w-full">
          <AiOutlineCalendar className="absolute right-0 top-1/2 w-6 h-6 text-slate-400" />
          <span className="font-sans text-slate-800 text-md mb-2 ">Deadline</span>
          <input value={date} onChange={dateHandler} className="w-full text-bold text-lg text-left outline-none" type={"date"} />
        </div>
        <div className=" relative flex flex-col items-end py-2 mt-2 border-b-2 w-full">
          <BiAlarm className="absolute right-0 top-1/2 w-6 h-6 text-slate-400" />
          <span className="font-sans text-slate-800 text-md mb-2 ">Time</span>
          <input value={time} onChange={timeHandler} className="w-full text-bold text-lg text-left outline-none" type={"time"} />
        </div>
        <div className="flex flex-col items-end py-4 border-b-2 w-full">
          <span className="font-sans text-slate-700 text-md mb-4">Task Type</span>
          <div className="flex items-center flex-wrap gap-y-2">
            <span onClick={typeHandler} className={`select-none checked:text-red-500 cursor-pointer flex items-center justify-center border border-slate-800 rounded-full mr-2 px-4 py-1 ${type === "Home" && "bg-zinc-800 text-white"}`} >Home</span>
            <span onClick={typeHandler} className={`select-none checked:text-red-500 cursor-pointer flex items-center justify-center border border-slate-800 rounded-full mr-2 px-4 py-1 ${type === "School" && "bg-zinc-800 text-white"}`} >School</span>
            <span onClick={typeHandler} className={`select-none checked:text-red-500 cursor-pointer flex items-center justify-center border border-slate-800 rounded-full mr-2 px-4 py-1 ${type === "Work" && "bg-zinc-800 text-white"}`} >Work</span>
            <span onClick={typeHandler} className={`select-none checked:text-red-500 cursor-pointer flex items-center justify-center border border-slate-800 rounded-full mr-2 px-4 py-1 ${type === "Activity" && "bg-zinc-800 text-white"}`} >Activity</span>
            <span onClick={typeHandler} className={`select-none checked:text-red-500 cursor-pointer flex items-center justify-center border border-slate-800 rounded-full mr-2 px-4 py-1 ${type === "Lifestyle" && "bg-zinc-800 text-white"}`} >Lifestyle</span>
            <span onClick={typeHandler} className={`select-none checked:text-red-500 cursor-pointer flex items-center justify-center border border-slate-800 rounded-full mr-2 px-4 py-1 ${type === "EveryDay" && "bg-zinc-800 text-white"}`} >EveryDay</span>
          </div>
        </div>
        <button type="submit" className="bg-zinc-800 my-4 text-white rounded-full py-2 w-full ">Save Task</button>
      </form>
    </div>
  );
}

export default TodoForm;