import React from "react";
import { useNavigate } from "react-router-dom";
import ProfileInfo from "./Cards/ProfileInfo";
import SearchBar from "./SearchBar";

function Navbar() {
  const [searchQuery, setSearchQuery] = React.useState("");
  const handelSearch = () => {};
  const navigate = useNavigate;

  const onLogout = () => {
    // localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="bg-white flex justify-between items-center px-4 drop-shadow-lg ">
      <h2 className="text-xl font-medium text-black py-2 ">Notes</h2>
      <SearchBar
        value={searchQuery}
        onChange={({ target }) => {
          setSearchQuery(target.value);
        }}
        handelSearch={handelSearch}
      />

      <ProfileInfo onLogout={onLogout} />
    </div>
  );
}

export default Navbar;
