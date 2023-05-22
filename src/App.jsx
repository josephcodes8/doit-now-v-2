import {
  Footer,
  TopNavigation,
  Notification,
  SearchBar,
  TaskList,
  AlterTasks,
} from "./components"

function App() {
  return (
    <section>
      <TopNavigation />
      <Notification />
      {/* <SearchBar /> */}
      <AlterTasks />
      <TaskList />
      <Footer />
    </section>
  )
}

export default App
