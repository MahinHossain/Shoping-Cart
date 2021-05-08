import React from "react";

export default function Cart({ cartItem, removeFromCart }) {
  return (
    <div>
      {" "}
      <h2>Cart</h2>
      <div className="row">
        {" "}
        {cartItem.map(
          (item, index) => (
            console.log(`item`, cartItem),
            (
              <div class="card" style={{ height: 250, width: 230 }}>
                <div class="card-body">
                  <img
                    class="card-img-top"
                    style={{ height: 200, width: 200 }}
                    src={item.image}
                    alt="Card image cap"
                  />

                  <h5 class="card-title">{item.name}</h5>
                  <h6>{item.price}</h6>
                  <a
                    href="#"
                    class="btn btn-primary small"
                    onClick={() => removeFromCart(item)}
                  >
                    Remove Item
                  </a>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
}
