import React from "react";

class OpenOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  render() {
    return (
      <div className="OpenOrder">
        <p>OpenOrder type {this.props.type}</p>
      </div>
    );
  }
}

export default OpenOrder;
