import { useState } from "react";
import TodoComponent from "./TodoComponent";
import "./todo.scss";

const Todo = () => {
  const [todoCounter, setTodoCounter] = useState(0);
  const [todoArray, setTodoArray] = useState([]);
  const [todoInput, setTodoInput] = useState("");
  // const [todocomponent, setTodoComponent] = useState()
  const addTodo = (e) => {
    e.preventDefault();
    const addToList = { id: todoCounter, todo: todoInput, done: false };
    setTodoCounter(todoCounter + 1);
    setTodoArray([...todoArray, addToList]);
  };

  const onDelete = (id) => {
    const updatedArray = todoArray.filter((i) => id !== i.id);
    setTodoArray(updatedArray);
  };
  const onDone = (id) => {
    const newArray = todoArray.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item
    );
    setTodoArray(newArray);
  };
  return (
    <main>
      <form action="">
        <input
          type="text"
          name="todo"
          id="todo"
          value={todoInput}
          placeholder="Todo"
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
      <section>
        {todoArray.map((item) => {
          return (
            <TodoComponent
              key={item.id}
              id={item.id}
              done={item.done}
              todo={item.todo}
              onDelete={() => onDelete(item.id)}
              onDone={() => onDone(item.id)}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Todo;
//always remember to reactify your code
