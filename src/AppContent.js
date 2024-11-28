import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { auth } from "./firebase"; // Import Firebase auth
import { signOut } from "firebase/auth"; // Import signOut for logout functionality
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import FilterPanel from "./components/FilterPanel";

function AppContent() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filters, setFilters] = useState({});
  const navigate = useNavigate();

  // Check if the user is authenticated
  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/"); // Redirect to login page if not authenticated
    }
  }, [navigate]);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleFilterChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const filteredTasks = tasks.filter((task) => {
    return (
      (!filters.category || task.category === filters.category) &&
      (!filters.priority || task.priority === filters.priority) &&
      (!filters.completed || task.completed === (filters.completed === "true"))
    );
  });

  // Logout function
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/"); // Redirect to login page after logout
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-blue-100 p-4 sm:p-6 md:p-8">
      <div className="max-w-full sm:max-w-md md:max-w-2xl mx-auto bg-white rounded-xl shadow-2xl p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 tracking-tight text-center sm:text-left">
            To-Do List
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white text-lg px-5 py-2 rounded-lg shadow-md hover:bg-red-600 transition duration-300 ease-in-out mt-4 sm:mt-0"
          >
            Logout
          </button>
        </div>

        {/* Task Input Section */}
        <TaskInput onAddTask={addTask} />

        {/* Filter Panel Section */}
        <FilterPanel onFilterChange={handleFilterChange} />

        {/* Task List Section */}
        <TaskList
          tasks={filteredTasks}
          onDeleteTask={deleteTask}
          onToggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default AppContent;














// import React, { useState } from "react";
// import TaskInput from "./components/TaskInput";
// import TaskList from "./components/TaskList";
// import FilterPanel from "./components/FilterPanel";

// function App() {
//   const [tasks, setTasks] = useState([]);
//   const [filters, setFilters] = useState({});

//   // const addTask = (task) => setTasks([...tasks, task]);
//   const addTask = (task) => {
//     setTasks([...tasks, task]);
  
//     if (task.reminderTime) {
//       const now = new Date();
//       const [hours, minutes] = task.reminderTime.split(":");
//       const reminderDate = new Date(
//         now.getFullYear(),
//         now.getMonth(),
//         now.getDate(),
//         hours,
//         minutes
//       );
  
//       const delay = reminderDate - now;
//       if (delay > 0) {
//         setTimeout(() => {
//           alert(`Reminder: ${task.text}`);
//         }, delay);
//       }
//     }
//   };
  

//   const deleteTask = (id) => setTasks(tasks.filter((task) => task.id !== id));

//   const toggleComplete = (id) =>
//     setTasks(
//       tasks.map((task) =>
//         task.id === id ? { ...task, completed: !task.completed } : task
//       )
//     );

//   const handleFilterChange = (key, value) =>
//     setFilters({ ...filters, [key]: value });

//   const onReorderTasks = (startIndex, endIndex) => {
//     const reorderedTasks = Array.from(tasks);
//     const [removed] = reorderedTasks.splice(startIndex, 1);
//     reorderedTasks.splice(endIndex, 0, removed);
//     setTasks(reorderedTasks);
//   };
  

//   const filteredTasks = tasks.filter((task) => {
//     return (
//       (!filters.category || task.category === filters.category) &&
//       (!filters.priority || task.priority === filters.priority) &&
//       (!filters.completed ||
//         task.completed === (filters.completed === "true"))
//     );

//   });

  

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
//         <h1 className="text-2xl font-bold text-gray-800 mb-4">To-Do List</h1>
//         <TaskInput onAddTask={addTask} />
//         <FilterPanel onFilterChange={handleFilterChange} />
//         <TaskList
//           tasks={filteredTasks}
//           onDeleteTask={deleteTask}
//           onToggleComplete={toggleComplete}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
