import React, { useState } from "react";
import Header from "./components/Header";
import Selector from "./components/Selector";
import TaskList from "./components/TaskList";

const Users = [
  { id: 1, name: "Emiliano" },
  { id: 2, name: "Jordi" },
  { id: 3, name: "Max" },
]

const allTasks = {
  1: ["Comprar leche"],
  2: ["Pasear el perro", "Estudiar React", "Tomar cursos"]
}



function App() {
  const [currentUserId, setCurrentUserId] = useState(1)
  const currentUser = Users.find(user => user.id === currentUserId)
  const tasks = allTasks[currentUserId] || []

}

export default App;