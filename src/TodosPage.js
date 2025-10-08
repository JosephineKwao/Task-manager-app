import React, { useEffect, useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import "./TodosPage.css";

const TODOS_KEY = "task-manager.todos.v1";

export default function TodosPage() {
  const [todos, setTodos] = useState(() => {
    try {
      const raw = localStorage.getItem(TODOS_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: Date.now()
    };
    setTodos((t) => [newTodo, ...t]);
  };

  const toggleComplete = (id) => {
    setTodos((t) => t.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const removeTodo = (id) => {
    setTodos((t) => t.filter(todo => todo.id !== id));
  };

  const [filter, setFilter] = useState("all"); // all | completed | incomplete

  const filtered = todos.filter(todo => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="todos-page">
      <div className="todos-grid">
        <aside className="left-col">
          <h2>Add Todo</h2>
          <AddTodoForm onAdd={addTodo} />
          <div className="side-note">
            <p>Total: <strong>{todos.length}</strong></p>
            <p>Completed: <strong>{todos.filter(t => t.completed).length}</strong></p>
          </div>
        </aside>

        <section className="right-col">
          <div className="filter-bar">
            <button className={`btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>All</button>
            <button className={`btn ${filter === "incomplete" ? "active" : ""}`} onClick={() => setFilter("incomplete")}>Incomplete</button>
            <button className={`btn ${filter === "completed" ? "active" : ""}`} onClick={() => setFilter("completed")}>Completed</button>
          </div>

          <TodoList todos={filtered} onToggle={toggleComplete} onDelete={removeTodo} />
        </section>
      </div>
    </div>
  );
}
