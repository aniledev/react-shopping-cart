import React, { Component } from "react";
import FeatureItems from "./FeatureItems";

export default class FeaturesList extends Component {
  render() {
    const { selected, features, USCurrencyFormat, handleUpdate } = this.props;

    return (
      <div className="FeaturesList">
        <form className="main__form">
          <h2>Customize your laptop</h2>
          <FeatureItems
            USCurrencyFormat={USCurrencyFormat}
            selected={selected}
            features={features}
            handleUpdate={handleUpdate}
          />
        </form>
      </div>
    );
  }
}

FeaturesList.defaultProps = {
  features: {},
};
