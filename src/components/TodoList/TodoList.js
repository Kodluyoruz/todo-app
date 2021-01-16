import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import "./TodoList.css";

function TodoList(props) {
  const { todos, deleteItem, toggleItem } = props;
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              deleteItem={deleteItem}
              toggleItem={toggleItem}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
