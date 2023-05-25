import { successIcon } from "../assets";
const Notification = () => {
  return (
    <div className="m-5 flex gap-x-5 bg-green-50 p-4 rounded-xl">
      {/* icon */}
      <img src={successIcon} alt="" width={50} />
      <div>
        <h1 className="text-xl font-bold mb-2 text-green-900">Successfull</h1>
        <p className="text-xs md:text-base text-gray-500">
          You successfully added a task
        </p>
      </div>
      <span className="uil-times ml-auto"></span>
    </div>
  );
};

export default Notification;
