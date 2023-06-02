import {
  Footer,
  TopNavigation,
  Notification,
  SearchBar,
  TaskList,
  AlterTasks,
} from "./components";

import { useSelector } from "react-redux";

function App() {
  const { isFieldVisible } = useSelector((state) => state.searchField);
  return (
    <section>
      <TopNavigation />
      <Notification />
      {isFieldVisible && <SearchBar />}
      <AlterTasks />
      <TaskList />
      <Footer />
    </section>
  );
}

export default App;
