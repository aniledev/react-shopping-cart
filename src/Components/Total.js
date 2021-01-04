import React, { Component } from "react";

export default class Total extends Component {
  render() {
    const { selected } = this.props;

    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );

    console.log(selected);

    return (
      <div className="Total">
        <div className="summary__total__label">Total</div>
        <div className="summary__total__value">
          {this.props.USCurrencyFormat.format(total)}
        </div>
      </div>
    );
  }
}

Total.defaultProps = {
  selected: {},
};
