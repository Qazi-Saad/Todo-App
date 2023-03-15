import React, { usestate } from "react";
import TodoCounter from "./TodoCounter";
import TodoForm from "./TodoForm";
import TodoHeader from "./TodoHeader";

const Body = () => {
  return (
    <div>
      <TodoHeader />
      <div className="body">
        <TodoForm />
        <TodoCounter />
      </div>
    </div>
  );
};

export default Body;
