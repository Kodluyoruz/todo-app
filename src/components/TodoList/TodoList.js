import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => {
          return (
            <li className="list-group-item">
              <TodoItem {...todo} key={todo.id} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
