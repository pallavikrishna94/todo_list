import React, { useState } from "react";

function ToDoItem(props) {
  const [strike, setStrike] = useState(false);

  function handleClick() {
    setStrike((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div>
      <li
        onClick={handleClick}
        style={{ textDecoration: strike ? "line-through" : "none" }}
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDoItem;
