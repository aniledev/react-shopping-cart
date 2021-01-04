import CartItem from "./CartItem";
import Total from "./Total";

import React from "react";

export default function CartList() {
  return (
    <div className="CartList">
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    </div>
  );
}
