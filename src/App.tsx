import { useState } from "react";
//import SearchByName from "./components/SearchByName";
//import SearchByRole from "./components/SearchByRole";
import "./main.scss";
import Employee from "./components/Employee/Employee";

function App() {

  return (
    
    <div className="tracker">
      <h2 className="tracker__header">Ticket Tracker</h2>
      <div className="tracker__employees">
        <Employee name="John Doe" role={"Junior Software Developer"} />
        <Employee name="Jane Smith" role={"Junior Software Developer"} />
      </div>
    </div>
  );
}

export default App;
