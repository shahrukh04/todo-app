import React, { useState } from "react";
import { motion } from "framer-motion";

function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("General");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskText.trim()) return;

    onAddTask({
      id: Date.now().toString(),
      text: taskText,
      category,
      priority,
      dueDate: dueDate || null,
      completed: false,
    });

    setTaskText("");
    setCategory("General");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          margin: "0 auto",
          width: "100%",
        }}
      >
        {/* Task Text Input */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="taskText" style={{ fontSize: "16px", fontWeight: "600" }}>
            Task
          </label>
          <input
            id="taskText"
            type="text"
            placeholder="Add a new task..."
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Category Dropdown */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="category" style={{ fontSize: "16px", fontWeight: "600" }}>
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
          </select>
        </div>

        {/* Priority Dropdown */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="priority" style={{ fontSize: "16px", fontWeight: "600" }}>
            Priority
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        {/* Due Date Picker */}
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="dueDate" style={{ fontSize: "16px", fontWeight: "600" }}>
            Due Date
          </label>
          <input
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#3182ce",
            color: "white",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Add Task
        </button>
      </form>
    </motion.div>
  );
}

export default TaskInput;
