import React, { Component } from "react";
import Total from "./Total";

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

    return (
      <section className="CartList">
        <h2>Your cart</h2>
        {/* CartItems component*/}
        {summary}
        <Total selected={selected} />
      </section>
    );
  }
}

CartList.defaultProps = {
  features: {},
};
