import React from "react";

class RecentTrade extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  render() {
    return (
      <div className="RecentTrade">
        <p>RecentTrade</p>
      </div>
    );
  }
}

export default RecentTrade;
