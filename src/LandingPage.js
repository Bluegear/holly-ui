import React from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import Header from "./Header";
import Footer from "./Footer";
import Order from "./Order";
import OpenOrders from "./OpenOrders";
import RecentTrade from "./RecentTrade";
import { Redirect } from "react-router-dom";

class LandingPage extends React.Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  componentWillMount() {
    this.state = { loading: true };
    const { cookies } = this.props;
    const token = cookies.get("token");
    if (!token) {
      this.state = { loading: false, isLoggedIn: false };
      return;
    }

    this.verifyToken(token).then(result => {
      this.setState({ isLoggedIn: result, token: token, loading: false });
    });
  }

  verifyToken = token => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Token " + token);
    let myInit = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default"
    };

    const myRequest = new Request(
      "https://limitless-sands-75412.herokuapp.com/auth/me/",
      myInit
    );

    return fetch(myRequest).then(function(response) {
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    });
  };

  render() {
    if (this.state.loading) {
      return <p>loading...</p>;
    }

    if (!this.state.isLoggedIn) {
      return (
        <Redirect
          to={{
            pathname: "/signup"
          }}
        />
      );
    }

    return (
      <div className="LandingPage">
        <Header isLoggedIn={this.state.isLoggedIn} />
        <div className="container is-fluid">
          <div className="section">
            <div className="tile is-ancestor is-vertical">
              <div className="tile">
                <div className="tile is-4 is-parent">
                  <div className="tile is-child">
                    <p className="notification is-light">
                      <code className="html">Daily Chart</code>
                    </p>
                  </div>
                </div>
                <div className="tile is-4 is-parent">
                  <div className="tile is-child">
                    <p className="notification is-light">
                      <code className="html">Weekly Chart</code>
                    </p>
                  </div>
                </div>
                <div className="tile is-4 is-parent">
                  <div className="tile is-child">
                    <p className="notification is-light">
                      <code className="html">Monthly Chart</code>
                    </p>
                  </div>
                </div>
              </div>
              <div className="tile">
                <div className="tile is-4 is-vertical is-parent">
                  <div className="tile is-child box">
                    <Order type="buy" token={this.state.token} />
                  </div>
                  <div className="tile is-child notification is-light">
                    <OpenOrders type="buy" token={this.state.token} />
                  </div>
                </div>
                <div className="tile is-4 is-vertical is-parent">
                  <div className="tile is-child box">
                    <Order type="sell" token={this.state.token} />
                  </div>
                  <div className="tile is-child notification is-light">
                    <OpenOrders type="sell" token={this.state.token} />
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child notification is-light">
                    <RecentTrade />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default withCookies(LandingPage);
