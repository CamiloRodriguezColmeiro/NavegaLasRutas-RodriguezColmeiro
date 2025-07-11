import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "./context/CartContext";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <BrowserRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
</React.StrictMode>
);