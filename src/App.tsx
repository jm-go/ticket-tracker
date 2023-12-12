import { useState } from "react";
import "./main.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h1>Counter App</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button>
    </div>
  );
}

export default App;
