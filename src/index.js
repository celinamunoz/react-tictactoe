import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


// This file is the bridge between the component 
// your created in the App.js file and the web browser 

// Line 1-5 brings all the necessary pieces together 
// react
// react's library to talk to web browsers (React DOM)
// the styles for your components
// the component you created in App.js