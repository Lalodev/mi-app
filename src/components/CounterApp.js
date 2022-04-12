import { useState } from "react";

const CounterApp = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h2>Counter App</h2>
      <button onClick={incrementCounter}>Increment</button>
      <h2>Clicks: {counter}</h2>
    </div>
  );
};

export default CounterApp;
