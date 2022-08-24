import SearchNote from "./SearchNote";

const Header = ({ handleSearchNote }) => {
  return (
    <div className="flex items-center justify-between py-4 my-4">
      <h1 className="text-2xl font-bold text-center">Personal Notes</h1>
      <SearchNote handleSearchNote={handleSearchNote} />
    </div>
  );
};

export default Header;
