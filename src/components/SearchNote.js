import { MdSearch } from "react-icons/md";

const SearchNote = ({ handleSearchNote }) => {
  return (
    <div className="flex items-center bg bg-slate-200 rounded-full p-2 m-1 w-1/2">
      <MdSearch className="m-1" size="1.5em" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        className="bg-transparent pl-2 w-full focus:outline-none"
        type="text"
        placeholder="Search...."
      />
    </div>
  );
};

export default SearchNote;
