import React from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import { Redirect } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

class SignIn extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  componentWillMount() {
    this.state = { isLoggedIn: false };
  }

  handleSignInBtnClick = () => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let myInit = {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
      body:
        '{"username": "' +
        this.username.value +
        '", "password": "' +
        this.password.value +
        '"}'
    };

    const myRequest = new Request(
      "https://limitless-sands-75412.herokuapp.com/auth/login/",
      myInit
    );

    fetch(myRequest)
      .then(function(response) {
        if (response.status === 200) return response.json();
        else throw new Error("Something went wrong on api server!");
      })
      .then(this.handleLogInSuccess);
  };

  handleLogInSuccess = response => {
    const { cookies } = this.props;
    cookies.set("token", response.auth_token, { path: "/" });
    this.setState({ isLoggedIn: true, token: cookies.get("token") });
  };

  render() {
    if (this.state.isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      );
    }

    return (
      <div className="SignIn">
        <Header isLoggedIn={false} />
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-one-third is-offset-one-third">
                <form>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Username"
                        ref={username => (this.username = username)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="Password"
                        ref={password => (this.password = password)}
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-key" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-text-centered">
                      <a
                        className="button is-primary is-large column is-fullwidth"
                        onClick={this.handleSignInBtnClick}
                      >
                        Sign In
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withCookies(SignIn);
