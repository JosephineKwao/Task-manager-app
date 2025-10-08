import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  if (todos.length === 0) {
    return <p className="empty">No todos to show — add one!</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={() => onToggle(todo.id)} onDelete={() => onDelete(todo.id)} />
      ))}
    </ul>
  );
}
