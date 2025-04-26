import { createContext, useState } from "react";

export const AppContext = createContext()

const Users = [
    { id: 1, name: "Emiliano" },
    { id: 2, name: "Jordi" },
    { id: 3, name: "Max" },
]
  
const allTasks = {
    1: ["Comprar leche"],
    2: ["Pasear el perro", "Estudiar React", "Tomar cursos"]
}
