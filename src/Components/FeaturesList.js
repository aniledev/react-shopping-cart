import React, { Component } from "react";
import slugify from "slugify";
import FeatureItems from "./FeatureItems";

export default class FeaturesList extends Component {
  render() {
    const { selected, features } = this.props;

    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return (
      <div className="FeaturesList">
        <form className="main__form">
          <h2>Customize your laptop</h2>
          <FeatureItems
            selected={selected}
            features={features}
            handleUpdate={this.props.handleUpdate}
          />
        </form>
      </div>
    );
  }
}

FeaturesList.defaultProps = {
  features: {},
};
