import React from "react";
import { Redirect } from "react-router-dom";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";

class Header extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: props.isLoggedIn, isLoggedOut: false };
  }

  handleSignoutBtnClick = () => {
    const { cookies } = this.props;
    const token = cookies.get("token");
    cookies.remove("token");
    this.logout(token);
    this.setState({
      isLoggedOut: true
    });
  };

  logout = token => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Token " + token);
    let myInit = {
      method: "POST",
      headers: myHeaders,
      mode: "cors",
      cache: "default"
    };

    const myRequest = new Request(
      "https://limitless-sands-75412.herokuapp.com/auth/logout/",
      myInit
    );

    return fetch(myRequest).then(function(response) {
      if (response.status === 204) return;
      else throw new Error("Something went wrong on api server!");
    });
  };

  authenticationElement() {
    if (this.state.isLoggedIn) {
      return (
        <div className="field is-grouped">
          <p className="control">
            <a className="button" onClick={this.handleSignoutBtnClick}>
              <span>Sign Out</span>
            </a>
          </p>
        </div>
      );
    } else {
      return (
        <div className="field is-grouped">
          <p className="control">
            <a className="button" href="/signin">
              <span>Sign In</span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary" href="/signup">
              <span>Sign Up</span>
            </a>
          </p>
        </div>
      );
    }
  }

  render() {
    if (this.state.isLoggedOut) {
      return (
        <Redirect
          to={{
            pathname: "/signin"
          }}
        />
      );
    }

    return (
      <div className="Header">
        <nav className="navbar is-light" aria-label="main navigation">
          <div className="container is-fluid">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <h1 className="title">HollyX</h1>
              </a>
            </div>
            <div className="navbar-menu">
              <div className="navbar-end">
                <div className="navbar-item">
                  {this.authenticationElement()}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default withCookies(Header);
