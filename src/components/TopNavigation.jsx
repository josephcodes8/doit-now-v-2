import React from "react"

const TopNavigation = () => {
  return (
    <header className="px-5 pt-5 md:px-10 md:pt-10">
      <nav className="flex items-center justify-between">
        {/* LOGO */}
        <a href="#" className="text-2xl font-bold">
          doit.<small className="text-sm">now</small>
        </a>
        {/* TOGGLE SEARCH ICON */}
        {/* TODO: ADD 'ONCLICK' FUNCTIONALITY TO TOGGLE THE SEARCH FIELD */}
        <button>
          <span className="uil-search text-xl"></span>
        </button>
      </nav>
    </header>
  )
}

export default TopNavigation
