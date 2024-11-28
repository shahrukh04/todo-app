import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase"; // Ensure you have Google Provider in firebase.js
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/app"); // Redirect to the main app page on success
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/app"); // Redirect to the main app page on success
    } catch (err) {
      setError("Google Sign-In failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 px-4">
      <div className="w-full max-w-sm sm:max-w-md bg-white p-8 rounded-lg shadow-lg animate-fadeIn">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Welcome Back!
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <svg
              className="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <path
                fill="#EA4335"
                d="M24 9.5c3.15 0 5.98 1.2 8.15 3.18l6.1-6.1C34.85 3.09 29.77 1 24 1 14.59 1 7 8.59 7 18s7.59 17 17 17c4.58 0 8.85-1.76 12.02-4.65L30.62 25.8C28.5 27.17 26.33 27.9 24 27.9c-7.08 0-12.85-5.7-12.85-12.85S16.92 9.5 24 9.5z"
              />
              <path
                fill="#34A853"
                d="M24 36.15c2.74 0 5.25-.84 7.36-2.3l6.05 6.05C33.89 42.36 29.16 44 24 44 14.59 44 7 36.41 7 27h9.85c0 6.65 5.5 12.15 12.15 12.15z"
              />
              <path
                fill="#FBBC05"
                d="M44 24c0-1.29-.16-2.55-.46-3.76H24v8.51h11.6c-.67 3.53-2.77 6.51-5.6 8.56l6.05 6.05C39.21 39.7 44 32.57 44 24z"
              />
              <path
                fill="#4285F4"
                d="M44 24c0-1.29-.16-2.55-.46-3.76H24v8.51h11.6c-.67 3.53-2.77 6.51-5.6 8.56l6.05 6.05C39.21 39.7 44 32.57 44 24z"
              />
            </svg>
            Sign in with Google
          </button>
        </div>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-blue-500 font-bold hover:underline"
            >
              Register here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
