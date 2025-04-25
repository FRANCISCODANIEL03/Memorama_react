import React from "react";
import Header from "./components/Header";
import Selector from "./components/Selector";
import TaskList from "./components/TaskList";

function App() {

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Selector />
      <TaskList />
    </div>
  );
}

export default App;