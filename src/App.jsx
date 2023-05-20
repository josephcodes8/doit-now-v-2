import { Footer } from "./components";
import { Input, Button } from "./components/atoms";

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
    additionalClass: "mr-2",
  };

  return (
    <section>
      <div className="m-5 p-5 flex items-center">
        <Input {...input} />
        <Button {...button}>
          <i className="uil-arrow-right ml-2"></i>
        </Button>
      </div>
      <Footer />
    </section>
  );
}

export default App;
