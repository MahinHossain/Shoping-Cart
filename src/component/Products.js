import React from "react";
import data1 from "./Data";
export default function Products() {
  const data = data1;
  return (
    <div className="row">
      {data.map((item) => (
        <div class="card shadow-lg p-3 mb-5 bg-white rounded w-25 h-25 p-4 m-4">
          <div class="card-body">
            <img
              class="card-img-top w-50 h-50"
              src={item.image}
              alt="Card image cap"
            />

            <h5 class="card-title">{item.name}</h5>
            <h6>{item.price}</h6>
            <a href="#" class="btn btn-primary small">
              Add to card
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
