import React, { Component } from "react";
import CartItems from "./CartItems";
import Total from "./Total";

export default class CartList extends Component {
  render() {
    const { selected, USCurrencyFormat } = this.props;

    return (
      <section className="CartList">
        <h2>Your cart</h2>
        <CartItems USCurrencyFormat={USCurrencyFormat} selected={selected} />
        <Total USCurrencyFormat={USCurrencyFormat} selected={selected} />
      </section>
    );
  }
}

CartList.defaultProps = {
  features: {},
};
