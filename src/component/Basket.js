import React from "react";

export default function Basket(props) {
  const { cartItem } = props;
  console.log(`cartItem`, cartItem);
  return (
    <aside className="basket">
      <h2> Your item</h2>

      {cartItem.length == 0 && (
        <h5 className="text-danger"> You have no data</h5>
      )}
    </aside>
  );
}
