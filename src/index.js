import React from "react";
import ReactDOM from "react-dom/client";
// https://react.dev/learn/passing-data-deeply-with-context#use-cases-for-context
import { AppProvider } from "./appContext";
// https://redux.js.org/tutorials/fundamentals/part-5-ui-react#passing-the-store-with-provider
import { Provider } from "react-redux";
import { store } from "./store";
// https://docs.amplify.aws/start/?sc_icampaign=start&sc_ichannel=docs-home
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
// https://create-react-app.dev/docs/adding-bootstrap
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
// https://developer.chrome.com/docs/workbox/what-is-workbox/
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

Amplify.configure(awsExports);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AppProvider>
      <App />
    </AppProvider>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
