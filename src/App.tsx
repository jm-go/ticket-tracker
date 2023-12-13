import SearchByName from "./components/SearchByName/SearchByName";
import "./main.scss";
import Employee from "./components/Employee/Employee";
import team from "./data/team";
import { FormEvent, useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tickets, setTickets] = useState(Array<number>(team.length + 1).fill(0));

  const saveCount = (index: number, value: number) => {
    let tempTickets = tickets; //make copy of our list 
    tempTickets[index] = value; // 
    setTickets(tempTickets);
  }

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const nameInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(nameInput);
  };

  const filteredTeam = team.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="tracker">
      <h2 className="tracker__header">Ticket Tracker</h2>
      <SearchByName searchTerm={searchTerm} onChange={handleInput} />
      <div className="tracker__employees">
        {filteredTeam.map((employee, index) => (
          <Employee
            index={index}
            key={employee.id}
            name={employee.name}
            role={employee.role}
            counter={tickets[employee.id]} 
            saveCount={saveCount} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;
