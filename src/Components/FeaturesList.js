import React, { Component } from "react";
import FeatureItems from "./FeatureItems";

export default class FeaturesList extends Component {
  render() {
    const { selected, features } = this.props;

    return (
      <div className="FeaturesList">
        <form className="main__form">
          <h2>Customize your laptop</h2>
          <FeatureItems
            USCurrencyFormat={this.props.USCurrencyFormat}
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
