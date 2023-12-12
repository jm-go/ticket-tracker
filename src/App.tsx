//import SearchByName from "./components/SearchByName";
//import SearchByRole from "./components/SearchByRole";
import "./main.scss";
import Employee from "./components/Employee/Employee";
import team from "./data/team";

const App = () => {

//team.filter -> returns new filtered array
// use map on new filtered array
// if for checking search bar



  return (
    <div className="tracker">
      <h2 className="tracker__header">Ticket Tracker</h2>
      <div className="tracker__employees">
        {team.map((employee) => (
          <Employee
            key={employee.id}
            name={employee.name}
            role={employee.role}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
