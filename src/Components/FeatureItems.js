import React, { Component } from "react";
import Item from "./Item";

export default class FeatureItems extends Component {
  render() {
    const { selected, features, USCurrencyFormat, handleUpdate } = this.props;

    const featuresItems = Object.keys(features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = features[feature].map((item) => {
        return (
          <Item
            selected={selected}
            feature={feature}
            item={item}
            USCurrencyFormat={USCurrencyFormat}
            handleUpdate={handleUpdate}
          />
        );
      });

      return (
        <fieldset className="feature" key={featureHash}>
          <legend className="feature__name">
            <h3>{feature}</h3>
          </legend>
          {options}
        </fieldset>
      );
    });

    return <div className="FeatureItems">{featuresItems}</div>;
  }
}
