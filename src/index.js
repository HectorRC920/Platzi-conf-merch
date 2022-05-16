import React from "react";
import reactDom from "react-dom";

import App from "./components/App";

const root = reactDom.createRoot(document.getElementById("app"));
root.render(<App />);
