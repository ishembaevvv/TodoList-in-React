import { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const createTodo = () => {
    let arr = [...todos, { text: inputValue, complete: false }]
    if (inputValue) {
      setTodos(arr);
      setInputValue("");
      localStorage.setItem('todos', JSON.stringify(arr));
    }
  }

  const deleteTodo = (id) => {
    let arr = [...todos];
    arr.splice(id, 1);
    setTodos(arr);
  }
  const completeTodo = (id) => {
    let arr = [...todos];
    arr[id].complete = !arr[id].complete;
    setTodos(arr);
  }

  return (
    <div className="App">
      <div className="containerTodo">
        <div>
          <input type="text"
            placeholder="typing text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
            }} />
          <button onClick={createTodo}>ADD</button>
        </div>
        <div>
          {
            todos &&
            todos.map((el, id) => {
              return <TodoItem
                deleteTodo={deleteTodo}
                completeTodo={completeTodo}
                todo={el}
                key={id}
                id={id}
              />
            })
          }
        </div>
      </div>

    </div>
  );
}

export default App;
