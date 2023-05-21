import { Footer } from "./components";
import { Button, Input, Select, TextArea } from "./components/atoms";

function App() {
  const button = {
    label: "Mark as Done",
    isFullyRounded: true,
    iconComesFirst: false,
    isUppercase: true,
    variant: "primary",
    additionalClass: "ml-auto",
  };

  const input = {
    id: "1",
    placeholder: "Please Enter you BirthYear",
    type: "date",
    isFullyRounded: false,
    additionalClass: "mr-2",
  };

  return (
    <section>
      <div className="m-5 p-5 flex items-center flex-col gap-2">
        <div className="w-full flex flex-col gap-1">
          <label htmlFor={input.id} className="font-bold">
            Title
            <span className="text-xs text-slate-500 font-light">
              {" "}
              ( Optional )
            </span>
          </label>
          <Input {...input} />
        </div>
        <TextArea {...input} />

        <div className="w-full flex flex-col gap-1">
          <label htmlFor="" className="font-bold">
            Category
          </label>
          <Select />
        </div>

        <Button {...button}>
          <i className="uil-arrow-right ml-2"></i>
        </Button>
      </div>
      <Footer />
    </section>
  );
}

export default App;
