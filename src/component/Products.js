import React from "react";
import data from "./Data";

export default function Products({ addToCart }) {
  return (
    <div>
      <h2>Products</h2>
      <div className="row">
        {" "}
        {data.map((item) => (
          <div class="card mt-5" style={{ height: 250, width: 230 }}>
            <div class="card-body">
              <img
                class="card-img-top"
                style={{ height: 200, width: 200 }}
                src={item.image}
                alt="Card image cap"
              />

              <h5 class="card-title">{item.name}</h5>
              <h6>{item.price}</h6>
              <button
                onClick={() => addToCart(item)}
                class="btn btn-primary small"
              >
                Add to card
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
