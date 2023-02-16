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

        <div className="task-count">
          <div className="total">
            <span id="total-task">Total Tasks</span>
            <span id="total-num">3</span>
          </div>
          <div className="completed">
            <span id="done-task">Done Tasks</span>
            <span id="done-num">0 of 3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
