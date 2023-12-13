import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type EmployeeProps = {
  index: number; 
  name: string;
  role: string;
  counter: number; 
  saveCount: (index: number, value: number) => void;
};

const Employee = ({
  index,
  name,
  role,
  counter,
  saveCount
}: EmployeeProps) => {
  const [ticketCount, setTicketCount] = useState<number>(counter);

  const incrementCounter = () => {
    setTicketCount(ticketCount + 1);
    saveCount(index, ticketCount);
  };

  const decrementCounter = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
      saveCount(index, ticketCount);
    }
  };

  return (
    <div className="employee">
      <h3 className="employee__name">{name}</h3>
      <p className="employee__role">{role}</p>
      <div className="employee__counter">
        <p>Tickets</p>
        {ticketCount}
        <div className="employee__buttons">
          <button
            type="button"
            className="employee__button"
            onClick={decrementCounter}
          >
            <Minus />
          </button>
          <button
            type="button"
            className="employee__button"
            onClick={incrementCounter}
          >
            <Plus/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
