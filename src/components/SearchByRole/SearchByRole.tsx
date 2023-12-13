import { FormEventHandler } from "react";

type SearchByRoleProps = {
  selectedRole: string;
  handleRole: FormEventHandler<HTMLSelectElement>;
  roles: string[];
};

const SearchByRole = ({
  selectedRole,
  handleRole,
  roles,
}: SearchByRoleProps) => {
  return (
    <div className="select">
      <select
        value={selectedRole}
        onChange={handleRole}
        className="select__role"
      >
        <option value="">All Roles</option>
        {roles.map((role) => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchByRole;
