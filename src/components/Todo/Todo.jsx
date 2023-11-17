import { useState } from "react";

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
    console.log(todoArray);
  };

  return (
    <main>
      <form action="">
        <input
          type="text"
          name="todo"
          id="todo"
          value={todoInput}
          onChange={(e) => {
            setTodoInput(e.target.value);
          }}
        />
        <button type="submit" onClick={addTodo}>
          Add
        </button>
      </form>
      {todoArray.map((item) => {
        return (
          <div key={item.id}>
            <p>{item.id}:</p>
            <p>{item.todo}</p>
            <p>{item.done ? "Done" : "Undone"}</p>
          </div>
        );
      })}
    </main>
  );
};
export default Todo;
//always remember to reactify your code
