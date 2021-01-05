import React, { Component } from "react";
import slugify from "slugify";

export default class Item extends Component {
  render() {
    const {
      selected,
      features,
      feature,
      item,
      USCurrencyFormat,
      handleUpdate,
    } = this.props;

    const itemHash = slugify(JSON.stringify(item));

    return (
      <div className="Item">
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
      </div>
    );
  }
}

// pass data from App to FeaturesList to FeaturesItem to Item
// make sure that it renders properly
