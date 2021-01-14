import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;
  return <div>{content}</div>;
}

export default Todo;
