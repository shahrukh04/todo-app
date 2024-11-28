import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import AppContent from "./AppContent";
import Login from "./components/Login";
import Register from "./components/Register";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth); // Hook to track the authenticated user

  // Handle loading state (improve with a spinner or animation)
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="loader"></div> {/* Example: you can replace with a spinner component */}
      </div>
    );
  }

  // Optional: handle error (if any) and display an error message or redirect
  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-500">Error: {error.message}</div>;
  }

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to="/app" replace />}
        />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/app" replace />}
        />

        {/* Protected Routes */}
        <Route
          path="/app"
          element={user ? <AppContent /> : <Navigate to="/login" replace />}
        />

        {/* Default Route */}
        <Route
          path="/"
          element={<Navigate to={user ? "/app" : "/login"} replace />}
        />
      </Routes>
    </Router>
  );
}

export default App;
















