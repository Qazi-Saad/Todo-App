import React, { useState } from "react";

const TodoForm = () => {
  const [newInput, setNewInput] = useState("");
  const [todo, setTodo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewInput("");
    if (!newInput) {
      alert("Please Enter a Task first !!!");
    } else {
      console.log(newInput);
      setTodo([...todo, newInput]);
      console.log(todo);
    }
  };

  return (
    <div>
      <form className="enter-task">
        <div className="task-entry">
          <input
            id="task-input"
            type="text"
            placeholder="Create a new task"
            value={newInput}
            onChange={(e) => setNewInput(e.target.value)}
          />
          <button type="submit" id="create-btn" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
