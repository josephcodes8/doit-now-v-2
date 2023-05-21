import { Categories } from "../../data";

const Select = () => {
  return (
    <div className="relative mt-1 flex flex-col items-start">
      <button className="text-sm rounded-full text-slate-600 bg-slate-100/50 focus:ring-1 focus:ring-indigo-500 px-4 py-1 md:py-1.5 lg:py-2">
        <span className={`mr-2 ${Categories[2].icon}`}></span>
        {Categories[2].label}
      </button>
      {/* options */}
      <ul className="border-[1px] mt-2 inline-block rounded-md">
        {Categories.map((option) => (
          <li className="hover:bg-slate-50/50 px-2 py-1 whitespace-nowrap">
            <span
              className={`${option.icon} mr-2
            `}
            ></span>
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Select;
