import { useState, useEffect } from "react"
import Users from "./usuarios/Users";

const URL = "https://jsonplaceholder.typicode.com/users"

const App = () => {
  const [userList, setUserList] = useState([])
  const [filterList, setFilterList] = useState([])

  const extractData = async () => {
    try {
      const response = await fetch(URL)
      const usersData = await response.json()
      setUserList(usersData)
    } catch (error) {
      alert("No se puede acceder al servidor en este momento")
      console.error(error.message);
      setUserList([]);
    }
  }
}

export default App