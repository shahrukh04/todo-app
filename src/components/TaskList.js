import React from "react";

function TaskList({ tasks, onDeleteTask, onToggleComplete }) {
  if (tasks.length === 0) {
    return <p className="text-center text-gray-500 font-medium">No tasks found.</p>;
  }

  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`p-6 rounded-lg shadow-lg transition-all transform hover:scale-105 ${
            task.completed ? "bg-green-50" : "bg-gray-50"
          }`}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">{task.text}</h3>
              <p className="text-sm text-gray-500 italic">{task.category}</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => onToggleComplete(task.id)}
                className={`w-full md:w-auto px-5 py-2 rounded-lg font-medium transition-colors duration-200 ${
                  task.completed
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-blue-500 hover:bg-blue-600"
                } text-white`}
              >
                {task.completed ? "Completed" : "Mark as Complete"}
              </button>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="w-full md:w-auto px-5 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors duration-200"
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
