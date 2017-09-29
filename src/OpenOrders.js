import React from "react";

class OpenOrders extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  render() {
    return (
      <div className="OpenOrders">
        <p>OpenOrders type {this.props.type}</p>
      </div>
    );
  }
}

export default OpenOrders;
