import "./App.css";
import Finished from "./components/Finished";
import Unfinished from "./components/Unfinished";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <>
      <TaskForm />
      <Unfinished />
      <Finished />
    </>
  );
}

export default App;
