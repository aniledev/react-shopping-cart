import React, { Component } from "react";
import slugify from "slugify";

export default class FeatureItems extends Component {
  render() {
    const { selected, features } = this.props;

    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const featuresItems = Object.keys(this.props.features).map(
      (feature, idx) => {
        const featureHash = feature + "-" + idx;
        const options = this.props.features[feature].map((item) => {
          const itemHash = slugify(JSON.stringify(item));
          return (
            <div key={itemHash} className="feature__item">
              <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === selected[feature].name}
                onChange={(e) => this.props.handleUpdate(feature, item)}
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
      }
    );

    return <div className="FeatureItems">{featuresItems}</div>;
  }
}