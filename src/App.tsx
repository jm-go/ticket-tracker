import SearchByName from "./components/SearchByName/SearchByName";
import "./main.scss";
import Employee from "./components/Employee/Employee";
import team from "./data/team";
import { FormEvent, useState } from "react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [tickets, setTickets] = useState(Array<number>(team.length + 1).fill(0));

  /**
 * Updates the ticket count for a specific employee.
 * 
 * @param {number} index - The index of the employee in the tickets array.
 * @param {number} value - The new ticket count value for the employee.
 *
 * This function:
 * 1. Creates a copy of the current tickets array to ensure immutability.
 * 2. Updates the ticket count for the employee at the specified index.
 * 3. Sets the updated tickets array to the state, triggering a re-render with the new counts.
 */
  const saveCount = (index: number, value: number) => {
    let tempTickets = [...tickets]; 
    tempTickets[index] = value; 
    setTickets(tempTickets);
  }

   // Handler for search input changes
  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const nameInput = event.currentTarget.value.toLowerCase();
    setSearchTerm(nameInput);
  };
  
  // Filter the team array based on the search term
  const filteredTeam = team.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="tracker">
      <h2 className="tracker__header">Ticket Tracker</h2>
      <SearchByName searchTerm={searchTerm} onChange={handleInput} />
      <div className="tracker__employees">
        {filteredTeam.map((employee) => (
          <Employee
            id={employee.id}
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
