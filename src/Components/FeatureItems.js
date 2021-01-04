import React, { Component } from "react";
import slugify from "slugify";

export default class FeatureItems extends Component {
  render() {
    const { selected, features, USCurrencyFormat, handleUpdate } = this.props;

    const featuresItems = Object.keys(features).map((feature, idx) => {
      const featureHash = feature + "-" + idx;
      const options = features[feature].map((item) => {
        const itemHash = slugify(JSON.stringify(item));
        return (
          <div key={itemHash} className="feature__item">
            <input
              type="radio"
              id={itemHash}
              className="feature__option"
              name={slugify(feature)}
              checked={item.name === selected[feature].name}
              onChange={(e) => handleUpdate(feature, item)}
            />
            <label htmlFor={itemHash} className="feature__label">
              {item.name} ({USCurrencyFormat.format(item.cost)})
            </label>
          </div>
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
