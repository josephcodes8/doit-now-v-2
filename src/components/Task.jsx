import { Categories } from "../data";
import { Button } from "../components/atoms";
import { useState } from "react";

const Task = (props) => {
  const { id, urgency, title, description, location, time } = props;
  const { label, icon } = Categories[id];
  const [isActionsVisible, setIsActionsVisible] = useState(false);
  return (
    <div className="bg-slate-900 mt-4 text-white rounded-md flex items-start gap-x-5 p-5">
      <span className={`${icon} bg-slate-800 p-4 text-xl rounded-xl`}></span>
      <div className="flex flex-1 flex-col">
        <p className="flex justify-between text-xs">
          <span>{label}</span>
          <span>{urgency}</span>
        </p>
        <h1 className="text-md font-bold mt-1">{title}</h1>
        <p className="mt-2 text-xs">{description}</p>
        <p className="text-xs mt-2 flex items-center">
          <span className="uil-location-point mr-2 text-green-500 text-lg"></span>
          {location}
        </p>
        <p className="text-xs mt-2 flex items-center">
          <span className="uil-clock-five mr-2 text-green-500 text-lg"></span>
          {time}
        </p>

        <button
          className="text-xs ml-auto"
          onClick={() => setIsActionsVisible(!isActionsVisible)}
        >
          Actions
          <span className="uil-angle-down ml-2"></span>
        </button>
        {isActionsVisible && (
          <div className="flex mt-3">
            <div className="ml-auto">
              <Button {...{ label: "Done", variant: "primary_alt" }}>
                <span className="uil-check ml-2"></span>
              </Button>
              <Button
                {...{
                  label: "Remove",
                  variant: "secondary_alt",
                  additionalClass: "ml-2",
                }}
              >
                <span className="uil-trash ml-2"></span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Task;
