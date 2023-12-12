import { FormEventHandler } from "react";

type SearchByNameProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchByName = ({ searchTerm, handleInput }: SearchByNameProps) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleInput}
        className="search__input"
      />
    </div>
  );
};

export default SearchByName;
