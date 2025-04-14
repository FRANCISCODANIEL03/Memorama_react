import { useState, useEffect } from "react"
import Users from "./usuarios/Users";

const URL = "https://jsonplaceholder.typicode.com/users"

const App = ()=>{
  const [userList, setUserList] = useState([])
  const [filterList, setFilterList] = useState([])

}

export default App