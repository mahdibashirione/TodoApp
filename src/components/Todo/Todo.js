
import { FiEdit2 } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { BiAlarm } from "react-icons/bi";
import { useTranslation } from "react-i18next";

const Todo = ({ todo, remove, checkHandler }) => {
  const [t, i18n] = useTranslation()
  return (
    <div className={`w-full bg-gradient-to-tr from-zinc-200 ${todo.color} border-2 border-white rounded-lg flex flex-col items-center justify-center p-3 ${todo.isCheck && "line-through opacity-40"} `} >
      <div className="flex w-full">
        <div className="w-[10%] flex flex-col justify-start items-center">
          <div className="w-7 h-7 bg-blue-500 flex items-center justify-center rounded-md">
            <FiEdit2 className="cursor-pointer text-white" />
          </div>
          <div className="cursor-pointer w-7 h-7 mt-2 bg-zinc-800 flex items-center justify-center rounded-md">
            <FiTrash onClick={() => remove(todo.id)} className=" text-white" />
          </div>
          <div className="w-7 h-7 mt-2 flex items-center justify-center rounded-md overflow-hidden">
            {todo.isCheck ? <ImCheckboxChecked onClick={() => checkHandler(todo.id)} className="cursor-pointer bg-white fill-slate-700 w-full h-full" /> : <ImCheckboxUnchecked onClick={() => checkHandler(todo.id)} className="cursor-pointer text-slate-700 w-full h-full" />}
          </div>
        </div>
        <div className="w-[90%] flex flex-col">
          <div className="w-full flex justify-end overflow-x-scroll">
            <span className="border border-white text-white px-3 py-1 rounded-full select-none text-sm font-sans mr-2">{t(todo.type)}</span>
          </div>
          <div className="flex flex-col items-end overflow-hidden w-full">
            <p className="select-none w-full truncate text-lg my-4 text-left">{todo.text}</p>
            <span className="text-sans text-sm flex items-center text-slate-800 select-none">
              {todo.date}
              <AiOutlineCalendar className="mr-2 w-5 h-5" />
            </span>
            <span className="text-sans text-sm flex items-center text-slate-800 select-none">
              {todo.time}
              <BiAlarm className="mr-2 w-5 h-5" />
            </span>
          </div>
        </div>
      </div>
    </div >
  );
}

export default Todo;