import React from "react";
import ReactDOM from "react-dom/client";
// import "globalthis/auto"; // Ensure globalThis polyfill is loaded first

import "./index.css"; // Tailwind CSS and other global styles
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import { ChakraProvider } from "@chakra-ui/react"; // Import ChakraProvider for Chakra UI

// If you use Firebase or other global initializations, import them here
// Example: Firebase initialization
// import './firebase'; // Ensure this is configured in a separate file if required

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    {/* Wrapping the application with ChakraProvider for Chakra UI styling */}
      <App />
  </React.StrictMode>
);

// Optional: Measure app performance (analytics, etc.)
reportWebVitals();
