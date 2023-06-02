import { toggleSearchField } from "../features/search/search.slice";
import { useDispatch } from "react-redux";
const SearchBar = () => {
  const dispatch = useDispatch();
  return (
    <section className="backdrop-blur-lg fixed w-full h-full p-5 z-50 top-0">
      <div className="bg-white mt-16 rounded-md md:max-w-[1080px] md:mx-auto shadow-md">
        <div className="border-b-[1px] py-1 px-5 flex items-center justify-between">
          <span className="uil-search text-xl"></span>
          <input
            type="text"
            className="outline-none p-4 text-slate-700 w-full"
            placeholder="Search Task"
          />
          <button
            onClick={() => dispatch(toggleSearchField())}
            className="text-xs hover:shadow-sm uppercase border-[1px] py-[4px] px-2 rounded-md"
          >
            Esc
          </button>
        </div>
        <div className="py-1 px-5">
          <p className="m-5 text-slate-400 text-center">No recent searches.</p>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
