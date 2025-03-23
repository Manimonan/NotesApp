import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar({ value, onChange, handelSearch }) {
  return (
    <div className="flex items-center gap-3 w-80 px-4 py-1.5 bg-slate-100 rounded-md">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-slate-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full  bg-transparent outline-none"
        placeholder="Search note "
      />

      <AiOutlineSearch
        className="text-slate-400 cursor-pointer hover:text-black size-6"
        onClick={handelSearch}
      />
    </div>
  );
}

export default SearchBar;
