import React from "react";

const TodoCounter = () => {
  return (
    <div>
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
  );
};

export default TodoCounter;
