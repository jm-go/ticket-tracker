import { Minus, Plus } from "lucide-react";
import { useState } from "react";

type EmployeeProps = {
  id: number;
  name: string;
  role: string;
  counter: number; // Ticket counter
  saveCount: (index: number, value: number) => void;
};

const Employee = ({ id, name, role, counter, saveCount }: EmployeeProps) => {
  // State to manage the individual ticket count for the specific employee
  const [ticketCount, setTicketCount] = useState<number>(counter);

  /**
   * Increments the ticket count for this employee.
   *
   * This function:
   * 1. Updates the local state `ticketCount` by incrementing its current value.
   * 2. Calls the `saveCount` function provided by App, with the
   *    `id` of this employee and the newly updated `ticketCount`.
   *    This ensures that the updated count is also reflected in the parent component's state,
   *    maintaining consistent state across the application.
   */
  const incrementCounter = () => {
    setTicketCount(ticketCount + 1);
    saveCount(id, ticketCount);
  };

  const decrementCounter = () => {
    if (ticketCount > 0) {
      setTicketCount(ticketCount - 1);
      saveCount(id, ticketCount);
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
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
