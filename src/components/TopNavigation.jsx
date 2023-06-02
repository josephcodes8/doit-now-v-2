import React from "react";
import { useDispatch } from "react-redux";
import { toggleSearchField } from "../features/search/search.slice";
const TopNavigation = () => {
  const dispatch = useDispatch();
  return (
    <header className="px-5 pt-5 md:px-10 md:pt-10">
      <nav className="flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="text-2xl font-bold">
          doit.<small className="text-sm">now</small>
        </a>
        {/* TOGGLE SEARCH ICON */}
        <button onClick={() => dispatch(toggleSearchField())}>
          <span className="uil-search text-xl"></span>
        </button>
      </nav>
    </header>
  );
};

export default TopNavigation;
