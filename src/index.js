import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { unregister } from "./registerServiceWorker";

window.renderAppTwo = (containerId, history) => {
  ReactDOM.render(
    <App history={history} />,
    document.getElementById(containerId)
  );
  unregister();
};

window.unmountAppTwo = (containerId) => {
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
};
