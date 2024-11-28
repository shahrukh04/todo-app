import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase";

function GoogleSignIn({ onSignIn }) {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      alert(`Welcome ${result.user.displayName}`);
      onSignIn(result.user);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="w-full sm:w-auto bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300"
    >
      Sign in with Google
    </button>
  );
}

export default GoogleSignIn;
