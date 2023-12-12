import { useState } from "react";

type EmployeeProps = {
  id?: number;
  name: string;
  role: string;
};

const Employee = ({ name, role }: EmployeeProps) => {
  const [ticketCount, setTicketCount] = useState<number>(0);

  const incrementCount = () => setTicketCount(ticketCount + 1);
  const decrementCount = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
    }
  };

  return (
    <div className="employee">
      <h3 className="employee__name">{name}</h3>
      <p className="employee__role">{role}</p>
      <div className="employee__counter">
        <p>Counter</p>
        {ticketCount}
        <div className="employee__buttons">
          <button type="button" className="employee__button" onClick={decrementCount}>
            -
          </button>
          <button type="button" className="employee__button" onClick={incrementCount}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
