import logo from "./logo.svg";
import "./App.css";
import Basket from "./component/Basket";
import Main from "./component/Main";
import Header from "./component/Header";
import Products from "./component/Products";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div>
        <Main></Main>
        <Basket></Basket>
      </div>
    </div>
  );
}

export default App;
