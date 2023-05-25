const Input = (props) => {
  const {
    id,
    type = "text", // default = textfield
    placeholder,
    isFullyRounded = false,
    additionalClass = "",
  } = props;
  return (
    <input
      type={type}
      id={id}
      className={`border-[1px] py-2.5 px-4  text-slate-500 text-sm w-full placeholder:text-sm transition-all duration-300 outline-transparent focus:outline-indigo-600 ${
        isFullyRounded ? "rounded-full" : "rounded-md"
      } ${additionalClass} `}
      placeholder={placeholder}
    />
  );
};

export default Input;
