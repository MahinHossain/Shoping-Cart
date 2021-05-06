import React from "react";

export default function Header() {
  return (
    <div className="container bg-primary">
      {" "}
      <div className="row">
        <h3 className="col-8">Small shoping Cart</h3>

        <div class=" row  col-4">
          {" "}
          <h6 className=" ml-4">
            cart <span class="badge badge-danger">Danger</span>
          </h6>
          <h6 className=" ml-4">signin</h6>
        </div>
      </div>
    </div>
  );
}
