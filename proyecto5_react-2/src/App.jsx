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

