import React from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import TodosPage from "./TodosPage";
import ContactPage from "./ContactPage";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <header className="navbar">
        <div className="brand">Task Manager</div>
        <nav className="nav-links">
          <Link to="/todos" className="nav-link">Todos</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </header>

      <main className="container">
        <Routes>
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<Navigate replace to="/todos" />} />
        </Routes>
      </main>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Josephine Kwao — Task Manager</p>
      </footer>
    </div>
  );
}
