const Button = (props) => {
  const {
    label, // the label used for the button
    iconComesFirst = null, // used to control where the icon is going to be rendered
    isFullyRounded = false, // controls weather the button is fully rounded or not
    isUppercase = false,
    variant = "primary", // default, primary, primary_alt, secondary, secondary_alt
    additionalClass, //used to add custom styling to a specific instance
    children, // the icon
  } = props;

  let button_type = {
    primary:
      "bg-green-500 hover:bg-green-400 focus:ring-green-500/50 text-white ",
    primary_alt:
      "bg-green-200 hover:bg-green-200/85 focus:ring-green-200/50 text-slate-800",
    secondary: "bg-red-500 hover:bg-red-400 focus:ring-red-500/50 text-white ",
    secondary_alt:
      "bg-red-200 hover-bg-red-200/85 focus:ring-red-200/50 text-slate-800",
  };

  return (
    <button
      className={`text-sm md:text-md px-4 py-1.5 md:py-2 whitespace-nowrap focus:ring-2 transition-all duration-300 ${
        button_type[variant]
      } ${isFullyRounded ? "rounded-full" : "rounded-md"} ${additionalClass} ${
        isUppercase && "uppercase tracking-wide"
      }`}
    >
      {iconComesFirst && children} {/* returns the icon before the label*/}
      {label}
      {!iconComesFirst && children} {/* displays the icon after the label*/}
    </button>
  );
};

export default Button;

/*

  The Button Object should look like this


  const button = {
    label: "Mark as Done",
    isFullyRounded: true,
    iconComesFirst: true,
    variant: "secondary",
    additionalClass: 'ml-auto' // example
  };
*/
