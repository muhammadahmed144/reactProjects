import "./index.css";
import { useState } from "react";

// Functional Component
function App() {
  const [counter, setCounter] = useState(0);

  function increament() {
    setCounter(counter + 1);
  }
  

  // decrease function

  const decrement = () => {
    if(counter === 0){
      return
    }
    setCounter(counter - 1);
  };

  return (
    <>
      <div className="app">
  <div className="card">
    <h2 className="title">Counter App</h2>

    <div className="counter-value">{counter}</div>

    <div className="btns">
      <button className="btn increment" onClick={increament}>
        +
      </button>
      <button className="btn decrement" onClick={decrement}>
        -
      </button>
    </div>
  </div>
</div>
    </>
  );
}

export default App;
