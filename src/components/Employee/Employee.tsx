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
   * Increments the ticket count for the employee.
   *
   * Increments `ticketCount` and updates the local state.
   * Calls `saveCount` from parent (`App`) with updated count and employee's `id`,
   *   to synchronise the update with the parent's state.
   */
  const incrementCounter = () => {
    const newTicketCount = ticketCount + 1;
    setTicketCount(newTicketCount);
    saveCount(id, newTicketCount);
  };

  /**
   * Decrements the ticket count for the employee.
   *
   * It decrements `ticketCount` and updates the local state.
   * It calls `saveCount` from parent (`App`) with the updated count and employee's `id`,
   *   to synchronise parent's state with the change.
   */
  const decrementCounter = () => {
    if (ticketCount > 0) {
      const newTicketCount = ticketCount - 1;
      setTicketCount(newTicketCount);
      saveCount(id, newTicketCount);
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
