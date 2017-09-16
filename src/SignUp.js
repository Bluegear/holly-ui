import React from "react";
import Header from "./Header";
import Footer from "./Footer";

class SignUp extends React.Component {
  handleSignUpBtnClick = () => {
    console.log("this is:", this);
  };

  render() {
    return (
      <div className="SignUp">
        <Header isLoggedIn={false} />
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-one-third is-offset-one-third">
                <p className="title">Sign Up</p>
                <form>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="text"
                        placeholder="Username"
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
                        type="email"
                        placeholder="Email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control has-icons-left">
                      <input
                        className="input"
                        type="password"
                        placeholder="New password"
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
                        onClick={this.handleSignUpBtnClick}
                      >
                        Create an account
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

export default SignUp;
