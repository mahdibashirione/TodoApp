import Todo from "../Todo/Todo";
const TodoList = ({ todo, remove, check }) => {
  return (
    <div>
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