import React, { Component } from "react";
import slugify from "slugify";
import FeatureItem from "./FeatureItem";

export default class FeaturesList extends Component {
  render() {
    const { selected } = this.props;

    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    const features = Object.keys(this.props.features).map((feature, idx) => {
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
              onChange={(e) => this.updateFeature(feature, item)}
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

    return (
      <div className="FeaturesList">
        <form className="main__form">
          <h2>Customize your laptop</h2>
          {features}
        </form>
      </div>
    );
  }
}

FeaturesList.defaultProps = {
  features: {},
};
