import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";

// import App from "./App";
import "./index.css";
import RootRouter from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RootRouter />);
