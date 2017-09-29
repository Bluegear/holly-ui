import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
require("font-awesome/css/font-awesome.min.css");
require("bulma/css/bulma.css");
require("./App.css");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/signin" component={SignIn} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
