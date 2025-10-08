import React from "react";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <div className="todo-left">
        <input type="checkbox" checked={todo.completed} onChange={onToggle} />
        <span className="todo-text">{todo.text}</span>
      </div>
      <div className="todo-right">
        <button className="btn small" onClick={onDelete} aria-label={`Delete ${todo.text}`}>Delete</button>
      </div>
    </li>
  );
}
