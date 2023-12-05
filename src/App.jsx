import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };
  const reset = () => {
    setCount(0)
  }
  return (
    <>
      <h1>COUNTER</h1>

      <h1>{count}</h1>
      <div style={{ display: "flex", gap: "15px" }} className="card">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
