import { Input, Button, Select, TextArea } from "./atoms";

const AlterTasks = () => {
  return (
    <section className="m-5 flex flex-col">
      <Button
        {...{
          label: "add task",
          iconComesFirst: true,
          isFullyRounded: true,
          additionalClass: "self-start mb-4",
        }}
      >
        <span className="uil-folder-plus"></span>
      </Button>

      <div className="mt-3">
        <label className="font-bold">Title</label>
        <Input
          {...{
            placeholder: "What do you want to do?",
            additionalClass: "mt-2",
          }}
        />
      </div>
      <div className="mt-6">
        <label className="font-bold">
          Description <span className="text-sm font-slate-300">(Optional)</span>
        </label>
        <TextArea
          {...{
            placeholder: "Brief Description?",
            additionalClass: "mt-2",
          }}
        />
      </div>
      <div className="mt-6">
        <label className="font-bold">Category </label>
        <Select
          {...{
            additionalClass: "mt-4",
          }}
        />
      </div>
      <div className="mt-6">
        <label className="font-bold">When? </label>
        <Input
          {...{
            type: "datetime-local",
            additionalClass: "mt-2",
          }}
        />
      </div>
      <div className="mt-6">
        <label className="font-bold">Location </label>
        <Input
          {...{
            type: "text",
            placeholder: "Bahir Dar, Ethiopia",
            additionalClass: "mt-2",
          }}
        />
      </div>
      <div className="mt-6">
        <label className="font-bold">Priority </label>
        <Input
          {...{
            type: "range",
            placeholder: "Bahir Dar, Ethiopia",
            additionalClass: "mt-2",
          }}
        />
        <p className="text-sm text-slate-400">Very Critical</p>
      </div>

      <Button
        {...{
          label: "Proceed",
          isUppercase: true,
          additionalClass: "mt-5 ml-auto",
        }}
      >
        <i className="uil-arrow-right ml-3"></i>
      </Button>
    </section>
  );
};

export default AlterTasks;
