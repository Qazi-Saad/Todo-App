import React from "react";

const Body = () => {
  return (
    <div>
      <div className="header-box">
        <h1 id="heading">Todo App</h1>
      </div>
      <div className="body">
        <div className="task-entry">
          <input id="task-input" type="text" placeholder="Create a new task" />
          <button id="create-btn">Create</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
