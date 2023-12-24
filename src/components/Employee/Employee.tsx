import { Minus, Plus } from "lucide-react";

type EmployeeProps = {
  id: number;
  name: string;
  role: string;
  counter: number; // Ticket counter
  saveCount: (index: number, value: number) => void;
};

const Employee = ({ id, name, role, counter, saveCount }: EmployeeProps) => {

/**
 * Increments the ticket count for the employee.
 *
 * Calculates the new ticket count by incrementing the current count.
 * Calls `saveCount` from the parent (`App`) with the updated count and employee's `id`
 * to synchronise the update with the parent's state.
 */
  const incrementCounter = () => {
    const newTicketCount = counter + 1;
    saveCount(id, newTicketCount);
  };

/**
 * Decrements the ticket count for the employee.
 *
 * Checks if the current ticket count is greater than 0 before decrementing.
 * Calls `saveCount` from the parent (`App`) with the updated count and employee's `id`
 * to synchronise the parent's state with the change.
 */
  const decrementCounter = () => {
    if (counter > 0) {
      const newTicketCount = counter - 1;
      saveCount(id, newTicketCount);
    }
  };

  return (
    <div className="employee">
      <h3 className="employee__name">{name}</h3>
      <p className="employee__role">{role}</p>
      <div className="employee__counter">
        <p>Tickets</p>
        {counter}
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
