import logo from "./logo.svg";
import "./App.css";
import Basket from "./component/Basket";
import Main from "./component/Main";
import Header from "./component/Header";
import Products from "./component/Products";
import data from "../src/component/Data";
import { useState } from "react";

function App() {
  const [cartItem, setcartItem] = useState([]);
  const [page, setpage] = useState("products");

  const renderProduct = () => (
    <div>
      {" "}
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
  const renderCartItem = () => (
    <div>
      {" "}
      <h2>Cart</h2>
      <div className="row">
        {" "}
        {cartItem.map((item) => (
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
              <a href="#" class="btn btn-primary small">
                Remove Item
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const viewItem = () => {
    setpage("cart");
  };
  const viewProduct = () => {
    setpage("products");
  };

  const addToCart = (product) => {
    setcartItem([...cartItem, product]);
    console.log(`cartItem`, cartItem);
  };
  return (
    <div className="App container">
      <div className="float-right">
        <div className=" row">
          <button className="btn btn-danger" onClick={() => viewItem()}>
            {" "}
            <i class="fas fa-shopping-cart"> </i>{" "}
            <span class="badge badge-danger">{cartItem.length}</span>
          </button>

          <button className=" btn btn-primary " onClick={() => viewProduct()}>
            Products
          </button>
        </div>
      </div>
      {page === "products" && renderProduct()}

      {page === "cart" && renderCartItem()}
    </div>
  );
}

export default App;
