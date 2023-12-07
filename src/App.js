import { useEffect, useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import './App.scss';
import { Context } from "./Context";


function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [type, setType] = useState("todos");
  const [count, setCount] = useState(10);

  const createTodo = () => {
    let arr = [...todos, { text: inputValue, completed: false}]
    if (inputValue) {
      setTodos(arr);
      setInputValue("");
      localStorage.setItem('todos', JSON.stringify(arr));
    }
  }

  useEffect(() => {
    let localTodos = JSON.parse(localStorage.getItem("todos"));
    localTodos && setTodos(localTodos);
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}?_limit=${count}`)
      .then(response => response.json())
      .then(json => setTodos(json))
  }, [type, count])

  const updateLocal = (arr) => {
    localStorage.setItem("todos", JSON.stringify(arr));
  }

  const deleteTodo = (id) => {
    let arr = [...todos];
    arr.splice(id, 1);
    setTodos(arr);
    updateLocal(arr);
  }
  const completeTodo = (id) => {
    let arr = [...todos];
    arr[id].completed = !arr[id].completed;
    setTodos(arr);
    updateLocal(arr);
  }

  return (
    <Context.Provider value={{ deleteTodo, completeTodo }}>
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
            <button onClick={() => setCount(count + 10, alert('Буттту!'))} className="moreTodoBtn">MORE Todos {todos.length}</button>
          </div>
          <div>
            {
              todos &&
              todos.map((el, id) => {
                return <TodoItem
                  todo={el}
                  key={id}
                  id={id}
                />
              })
            }
          </div>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
