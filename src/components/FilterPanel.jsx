import React from "react";

function FilterPanel({ onFilterChange }) {
  return (
    <div className="flex flex-wrap gap-4 mt-4 mb-4 ">
      <select
        onChange={(e) => onFilterChange("category", e.target.value)}
        className="border px-4 py-2 rounded w-full sm:w-auto"
      >
        <option value="">All Categories</option>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <select
        onChange={(e) => onFilterChange("priority", e.target.value)}
        className="border px-4 py-2 rounded w-full sm:w-auto"
      >
        <option value="">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select
        onChange={(e) => onFilterChange("completed", e.target.value)}
        className="border px-4 py-2 rounded w-full sm:w-auto"
      >
        <option value="">All Tasks</option>
        <option value="true">Completed</option>
        <option value="false">Incomplete</option>
      </select>
    </div>
  );
}

export default FilterPanel;

