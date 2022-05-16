import Todo from "../Todo/Todo";
const TodoList = ({ todo, remove, check }) => {
  return (
    <div className="px-4">
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