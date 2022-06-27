import React, { useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [list, setList] = useState<Array<object>>([]);

  const [error, setError] = useState<string>("");
  const [checked, setChecked] = useState<boolean>(false);

  const handleSubmit = () => {
    if (todo != "") {
      setList([...list, { todo: todo, id: Math.floor(Math.random() * 1000) }]);
      setTodo("");
    }
    setError("");
    if (todo === "") {
      setError("You must create a todo");
    }
  };

  const handleDelete = (id: number) => {
    setList(list.filter((todo: any) => todo.id !== id));
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleKeyPress = ({ key }: any) => {
    if (key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="App">
      <h1 className="title">Simplefied todos</h1>

      <main className="wrapper">
        {error && (
          <p className="error-todo">
            Whoops, looks like you forgot to create a todo
          </p>
        )}
        <div className="input-button-wrapper">
          <input
            className={error ? "text-input error" : "text-input"}
            onChange={handleOnChange}
            placeholder="Create todo"
            onKeyDown={handleKeyPress}
            value={todo}
            type="text"
          />
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <section className="todos-section">
          <div className="todo-list-wrapper">
            {list.map((item: any) => {
              return (
                <List
                  item={item}
                  handleDelete={handleDelete}
                  isChecked={setChecked}
                  key={item.id}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
