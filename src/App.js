import "./App.css";
import ConditionalApp from "./components/ConditionalApp";
import CounterApp from "./components/CounterApp";
import ErrorApp from "./components/ErrorApp";
import ProductApp from "./components/ProductApp";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div>
      <ShoppingCart />
      <hr />
      <ProductApp />
      <hr />
      <ErrorApp />
      <hr />
      <ConditionalApp />
      <hr />
      <CounterApp />
    </div>
  );
}

export default App;
