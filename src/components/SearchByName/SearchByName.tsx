import { FormEventHandler } from "react";

// Define the type for the props
type SearchByNameProps = {
  searchTerm: string;
  onChange: FormEventHandler<HTMLInputElement>;
};

const SearchByName = ({ searchTerm, onChange }: SearchByNameProps) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={onChange}
        className="search__input"
      />
    </div>
  );
};

export default SearchByName;
