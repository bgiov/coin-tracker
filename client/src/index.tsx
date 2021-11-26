import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
import { ppid } from "process";

const root = document.getElementById("root");
const baseURL = window.location.origin + "/dashboard";
console.log(baseURL);
// @ts-ignore
ReactDOM.createRoot(root).render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN as string}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID as string}
    redirectUri={baseURL}
  >
    <App />
  </Auth0Provider>
);
