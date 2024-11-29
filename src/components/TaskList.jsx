import React, { useState, useEffect } from "react";

function TaskList({ tasks, onDeleteTask, onToggleComplete }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterCategory, setFilterCategory] = useState("All");

  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  const categoryColors = {
    General: "bg-gray-100 text-gray-600",
    Work: "bg-blue-100 text-blue-600",
    Personal: "bg-purple-100 text-purple-600",
    Shopping: "bg-green-100 text-green-600",
  };

  // Filter tasks based on search query and selected category
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      filterCategory === "All" || task.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter Section */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />

        {/* Category Filter */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className=" w-full sm:w-1/4 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        >
          <option value="All">All Categories</option>
          <option value="General">General</option>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Shopping">Shopping</option>
        </select>
      </div>

      {/* Task List */}
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500 font-medium">No tasks found.</p>
      ) : (
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`p-4 sm:p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 ${
                task.completed ? "bg-green-50" : "bg-gray-50"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                {/* Task Details */}
                <div className="flex flex-col">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                    {task.text}
                  </h3>
                  <p
                    className={`inline-block px-3 py-1 mt-2 rounded-lg text-sm font-medium ${
                      categoryColors[task.category]
                    }`}
                  >
                    {task.category}
                  </p>
                  {task.dueDate && (
                    <p className="text-sm text-gray-600 mt-1">
                      <strong>Due Date:</strong>{" "}
                      {new Date(task.dueDate).toLocaleDateString()}
                    </p>
                  )}
                  <p
                    className={`mt-2 inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      priorityColors[task.priority]
                    }`}
                  >
                    Priority: {task.priority}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <button
                    onClick={() => onToggleComplete(task.id)}
                    className={`w-full sm:w-auto px-4 py-2 rounded-lg font-medium transition-colors duration-200 ${
                      task.completed
                        ? "bg-green-500 hover:bg-green-600"
                        : "bg-blue-500 hover:bg-blue-600"
                    } text-white`}
                  >
                    {task.completed ? "Completed" : "Mark as Complete"}
                  </button>
                  <button
                    onClick={() => onDeleteTask(task.id)}
                    className="w-full sm:w-auto px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TaskList;
 