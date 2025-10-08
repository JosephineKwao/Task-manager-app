import React, { useState } from "react";
import "./AddTodoForm.css"; // optional if you want styling

export default function AddTodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);           // ✅ Call the addTodo function from TodosPage
      setText("");           // ✅ Clear input after adding
    }
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit" className="btn">Add Todo</button>
    </form>
  );
}

