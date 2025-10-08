import React, { useState } from "react";
import "./ContactPage.css";

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo: just log and clear.
    console.log("Contact form submitted:", form);
    alert("Thanks — your message was received (demo).");
    setForm({ firstName: "", lastName: "", email: "", comments: "" });
  };

  return (
    <div className="contact-page">
      <h2>Contact</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>First name</label>
            <input name="firstName" value={form.firstName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input name="lastName" value={form.lastName} onChange={handleChange} required />
          </div>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Comments</label>
          <textarea name="comments" rows="5" value={form.comments} onChange={handleChange} />
        </div>

        <button className="btn" type="submit">Submit</button>
      </form>
    </div>
  );
}
