import React from "react";
import ReactDOM from "react-dom/client";
// Styles
import "./custom.scss";
// State
import { Provider } from "react-redux";
import { store } from "./app/store";
// AWS
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
// Config
import { filteredProjects, projectCardImages } from "./config";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

Amplify.configure(awsExports);

root.render(
  <Provider store={store}>
    <App
      filteredProjects={filteredProjects}
      projectCardImages={projectCardImages}
    />
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
