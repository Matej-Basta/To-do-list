import "./App.css";

import { TodoItem } from "./components/TodoItem";

function App() {
  return (
    <>
      <TodoItem task="clean the room" />
      <TodoItem task="take out the trask" />
      <TodoItem task="learn React" />
      <TodoItem task="play the guitar" />
    </>
  );
}

export default App;
