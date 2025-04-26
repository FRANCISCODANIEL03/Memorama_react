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

export const AppProvider = ({ children })=>{
    const [currentUserId, setCurrentUserId] = useState(1)
    const currentUser = Users.find(user => user.id === currentUserId)
    const tasks = allTasks[currentUserId] || []

    const datosCompartidos = {
        Users,
        currentUserId,
        setCurrentUserId,
        currentUser,
        tasks,
    }

    return (
        <AppContext.Provider
            value={datosCompartidos}        
        >
            {
                children 
            }
        </AppContext.Provider>

    )
}