import { useState } from "react";

type EmployeeProps = {
  id?: number;
  name: string;
  role: string;
};

const Employee = ({ name, role }: EmployeeProps) => {
  const [ticketCount, setTicketCount] = useState<number>(0);

  const incrementCount = () => setTicketCount(ticketCount + 1);
  const decrementCount = () => setTicketCount(ticketCount - 1);

  return (
    <div className="employee">
      <h3 className="employee__name">{name}</h3>
      <p className="employee__role">{role}</p>
      <div className="employee__counter">
        <p>Counter</p>
        {ticketCount}
        <button onClick={decrementCount}>-</button>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
};

export default Employee;
