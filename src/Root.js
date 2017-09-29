import React from "react";
import { CookiesProvider } from "react-cookie";
import App from "./App";

class Root extends React.Component {
  render() {
    return (
      <CookiesProvider>
        <App />
      </CookiesProvider>
    );
  }
}

export default Root;
