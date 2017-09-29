import React from "react";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = { secondsElapsed: 0 };
  }

  sellBtn() {
    if (this.props.type === "sell") {
      return (
        <div className="column is-one-third">
          <p className="bd-notification is-danger is-uppercase">
            {this.props.type}
          </p>
        </div>
      );
    }
  }

  buyBtn() {
    if (this.props.type === "buy") {
      return (
        <div className="column is-one-third">
          <p className="bd-notification is-success is-uppercase">
            {this.props.type}
          </p>
        </div>
      );
    }
  }

  getCurrency() {
    if (this.props.type === "buy") {
      return "THB";
    } else {
      return "ETH";
    }
  }

  render() {
    return (
      <div className="Order">
        <div className="columns is-1">
          {this.buyBtn()}
          <div className="column">
            <form className="order-form">
              <div className="field is-horizontal">
                <div className="field-label is-small">
                  <label className="label">Amount</label>
                </div>
                <div className="field-body">
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <input
                        className="input is-small"
                        type="text"
                        placeholder="0.00000000"
                      />
                    </div>
                    <div className="control is-expanded">
                      <a className="button is-static is-small">
                        &nbsp;&nbsp;&nbsp;&nbsp;{this.getCurrency()}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field is-horizontal">
                <div className="field-label is-small">
                  <label className="label">Rate</label>
                </div>
                <div className="field-body">
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <input
                        className="input is-small"
                        type="text"
                        placeholder="0.00000000"
                      />
                    </div>
                    <div className="control is-expanded">
                      <a className="button is-static is-small">THB/ETH</a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
          {this.sellBtn()}
        </div>
      </div>
    );
  }
}

export default Order;
