import React from "react";

const TextArea = (props) => {
  const { id, placeholder, rows = 5, additionalClass = "" } = props;

  return (
    <textarea
      id={id}
      rows={rows}
      className={`border-[1px] py-2.5 px-4 rounded-md text-slate-500 text-sm w-full placeholder:text-sm transition-all duration-300 outline-transparent focus:outline-indigo-600  ${additionalClass} `}
      placeholder={placeholder}
      style={{ resize: "none" }}
    ></textarea>
  );
};

export default TextArea;
