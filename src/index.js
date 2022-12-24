import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRouter, prepareRoutes } from "@curi/router";
import { browser } from "@hickory/browser";
import { createRouterComponent } from "@curi/react-dom";
import Home from "./pages/Home";
import Samples from "./pages/Samples";
import Problems from "./pages/Problems";
import Receptions from "./pages/Receptions";
import Potentials from "./pages/Potentials";
import About from "./pages/About";
import Introduction from "./pages/Introduction";
import Furthermore from "./pages/Furthermore";

const routes = prepareRoutes([
  { name: "Home", path: "", respond: () => ({ body: Home }) },
  { name: "StableDiffusion", path: "stablediffusion", respond: () => ({ body: Introduction }) },
  { name: "Playground", path: "samples", respond: () => ({ body: Samples }) },
  { name: "Public Receptions", path: "receptions", respond: () => ({ body: Receptions }) },
  { name: "Problems", path: "problems", respond: () => ({ body: Problems }) },
  { name: "Potentials", path: "potentials", respond: () => ({ body: Potentials }) },
  { name: "Furthermore", path: "furthermore", respond: () => ({ body: Furthermore }) },
  { name: "About", path: "about", respond: () => ({ body: About }) },
]);

const Router = createRouterComponent(createRouter(browser, routes));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
