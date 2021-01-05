import React, { Component } from "react";
import "../Styles/App.css";
import Header from "./Header";
import FeaturesList from "./FeaturesList";
import CartList from "./CartList";
import FEATURES from "./Features";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {
        Processor: {
          name: "17th Generation Intel Core HB (7 Core with donut spare)",
          cost: 700,
        },
        "Operating System": {
          name: "Ubuntu Linux 16.04",
          cost: 200,
        },
        "Video Card": {
          name: "Toyota Corolla 1.5v",
          cost: 1150.98,
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500,
        },
      },
    };
  }

  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected,
    });
  };

  render() {
    const USCurrencyFormat = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return (
      <div className="App">
        <Header />

        <main className="main">
          <FeaturesList
            USCurrencyFormat={USCurrencyFormat}
            features={FEATURES}
            selected={this.state.selected}
            handleUpdate={(feature, newValue) =>
              this.updateFeature(feature, newValue)
            }
          />
          <CartList
            USCurrencyFormat={USCurrencyFormat}
            features={this.props.features}
            selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}
