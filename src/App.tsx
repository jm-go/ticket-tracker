import SearchByName from "./components/SearchByName/SearchByName";
//import SearchByRole from "./components/SearchByRole";
import "./main.scss";
import Employee from "./components/Employee/Employee";
import team from "./data/team";
import { FormEvent, useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const nameInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(nameInput);
  };

  const filteredTeam = team.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm)
  );

  //team.filter -> returns new filtered array
  // use map on new filtered array
  // if for checking search bar

  return (
    <div className="tracker">
      <h2 className="tracker__header">Ticket Tracker</h2>
      <SearchByName searchTerm={searchTerm} handleInput={handleInput} />
      <div className="tracker__employees">
        {filteredTeam.map((employee) => (
          <Employee
            key={employee.id}
            name={employee.name}
            role={employee.role}
            counter={0}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
