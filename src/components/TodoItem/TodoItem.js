import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const { content, id, deleteItem, toggleItem, checked } = props;
  let itemClass = "";
  if (checked) {
    itemClass = "checked";
  }
  return (
    <li className={"list-group-item"}>
      <div className="todoItem" onClick={() => toggleItem(id)}>
        <p className={itemClass}>{content}</p>
        <button
          onClick={(e) => {
            deleteItem(id);
            e.stopPropagation();
          }}
          className="btn btn-danger"
        >
          Sil
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
