import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  // let i2 = [];
  // const newItem = "kiwi";
  // i2 = [...i2, newItem];
  // console.log(i2);
  function handleChange(event) {
    const newInput = event.target.value;
    setInput(newInput);
  }

  function handleItem() {
    setItems([...items, input]);
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={input} />
        <button onClick={handleItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((i) => (
            <ToDoItem text={i} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
