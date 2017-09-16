import React from "react";
import { instanceOf } from "prop-types";
import { withCookies, Cookies } from "react-cookie";
import Header from "./Header";
import Footer from "./Footer";
import Order from "./Order";
import OpenOrder from "./OpenOrder";
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
        <Order type="buy" token={this.state.token} />
        <Order type="sell" token={this.state.token} />
        <OpenOrder type="buy" token={this.state.token} />
        <OpenOrder type="sell" token={this.state.token} />
        <RecentTrade />
        <Footer />
      </div>
    );
  }
}

export default withCookies(LandingPage);
