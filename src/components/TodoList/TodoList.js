import Todo from "../Todo/Todo";
const TodoList = ({ todo, remove, check }) => {
  return (
    <div className="overflow-y-auto pb-[70px] px-4 grid grid-cols-[1fr] gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center container mx-auto">
      {!todo.length && <div className="w-full text-center font-sans text-lg mt-2">
        is Not Task
      </div>}
      {todo.map(todo => <Todo
        key={todo.id}
        todo={todo}
        remove={remove}
        checkHandler={check}
      />)}
    </div>
  );
}

export default TodoList;