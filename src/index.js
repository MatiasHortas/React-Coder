import React from "react";
import { initializeApp } from "firebase/app";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CartContextProvider } from "./context/CartContext";

const firebaseConfig = {
  apiKey: "AIzaSyDR9rZF-C5XjZU5oBlpqqQwBEuwSYfxqAU",
  authDomain: "react-coder-rickandmorty.firebaseapp.com",
  projectId: "react-coder-rickandmorty",
  storageBucket: "react-coder-rickandmorty.appspot.com",
  messagingSenderId: "352110874444",
  appId: "1:352110874444:web:53eb194f56f614ff6809e9",
  measurementId: "G-9Z6FG2MMR2",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
