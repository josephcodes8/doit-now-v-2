import { useState } from "react"
import { Categories } from "../../data"

const Select = () => {
  return (
    <div className="relative mt-1 flex flex-col items-start">
      <button className="text-sm rounded-full text-slate-600 bg-slate-100/50 focus:ring-1 hover:bg-slate-200 transition-colors focus:ring-green-500 px-4 py-1 md:py-1.5 lg:py-2">
        <span className={`mr-2 ${Categories[2].icon}`}></span>
        {Categories[2].label}
        <span className="uil-angle-down ml-3"></span>
      </button>
      {/* options */}
      <ul className="border-[1px] mt-2 py-1 inline-block rounded-md shadow-sm">
        {Categories.map((option) => (
          <li
            className={`px-4 py-1 whitespace-nowrap ${
              option.isSelected && "text-green-600"
            } ${!option.isSelected && "hover:bg-slate-50/50 cursor-pointer"} `}
          >
            <span
              className={`${option.icon} mr-3
            `}
            ></span>
            <a href="#" className="inline-block text-sm">
              {option.label}
            </a>
            {option.isSelected && <span className="uil-check ml-2"></span>}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Select
