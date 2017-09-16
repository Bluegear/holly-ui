import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  render() {
    return (
      <div className="Footer">
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
              <p>
                <strong>
                  "'The cat sat on a mat' is not a story. 'The cat sat on the
                  dog's mat' is a story."
                </strong>
              </p>
              <p>- John le Carré</p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
