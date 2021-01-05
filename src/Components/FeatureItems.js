import React, { Component } from "react";
import slugify from "slugify";
import Item from "./Item";

// class .feature_item into its own component
export default class FeatureItems extends Component {
  render() {
    const { selected, features, USCurrencyFormat, handleUpdate } = this.props;

    const featuresItems = Object.keys(features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = features[feature].map((item) => {
        return (
          // refractor .feature__item into its own component
          <Item
            selected={this.props.selected}
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
