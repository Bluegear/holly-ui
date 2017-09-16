import React from "react";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  render() {
    return (
      <div className="Order">
        <p>order type {this.props.type}</p>
      </div>
    );
  }
}

export default Order;
