import React, { useState } from "react";

function TaskInput({ onAddTask }) {
  const [taskText, setTaskText] = useState("");
  const [category, setCategory] = useState("General"); // Default category
  const [priority, setPriority] = useState("Medium"); // Default priority
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if task text is empty
    if (!taskText.trim()) return;

    // Create a task object and pass it to the parent component
    onAddTask({
      id: Date.now().toString(),
      text: taskText,
      category,
      priority,
      dueDate: dueDate || null, // If no date is selected, set as null
      completed: false,
    });

    // Reset fields after submission
    setTaskText("");
    setCategory("General");
    setPriority("Medium");
    setDueDate("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 p-8 bg-white rounded-xl shadow-xl max-w-md w-full mx-auto">
      {/* Task Text Input */}
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-2">Task</label>
        <input
          type="text"
          placeholder="Add a new task..."
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
          required
        />
      </div>

      {/* Category Dropdown */}
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-2">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        >
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      {/* Priority Dropdown */}
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-2">Priority</label>
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </div>

      {/* Due Date Picker */}
      <div>
        <label className="block text-lg font-semibold text-gray-700 mb-2">Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200 ease-in-out"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200 ease-in-out"
      >
        Add Task
      </button>
    </form>
  );
}

export default TaskInput;
