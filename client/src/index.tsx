import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = document.getElementById("root");
// @ts-ignore
ReactDOM.createRoot(root).render(<App />);
