import React from "react";
import { CookiesProvider } from "react-cookie";
import App from "./App";
require("font-awesome/css/font-awesome.min.css");
require("bulma/css/bulma.css");

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
