import CartItem from "./CartItem";
import Total from "./Total";

import React, { Component } from "react";

export default class CartList extends Component {
  render() {
    const { selected } = this.props;

    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const summary = Object.keys(selected).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const selectedOption = selected[feature];

      return (
        <div className="summary__option" key={featureHash}>
          <div className="summary__option__label">{feature} </div>
          <div className="summary__option__value">{selectedOption.name}</div>
          <div className="summary__option__cost">
            {USCurrencyFormat.format(selectedOption.cost)}
          </div>
        </div>
      );
    });

    const total = Object.keys(selected).reduce(
      (acc, curr) => acc + selected[curr].cost,
      0
    );

    return (
      <section className="CartList">
        <h2>Your cart</h2>
        {summary}
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            {USCurrencyFormat.format(total)}
          </div>
        </div>
      </section>
    );
  }
}

CartList.defaultProps = {
  features: {},
};
