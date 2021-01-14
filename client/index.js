import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

window.addEventListener("DOMContentLoaded", () => {
  //ReactDOM.hydrate() will only add event handlers to the DOM if the server already serves a component
  //the server already handles <App />, so we're just adding event handlers without any re-renders
  ReactDOM.hydrate(<App />, document.getElementById("ssr-app"));
});
