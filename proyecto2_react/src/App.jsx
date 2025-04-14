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
  useEffect(() => {
    extractData()
  }, []);

  const filtrado = (evt) => {
    const busqueda = evt.target.value;
    if (busqueda == '') {
      extractData()
      return
    }
    //TODO: Refrescar la lista con el filtro
    const listaFiltrada = userList.filter((usuario) => {
      return usuario.name.toLowerCase().includes(busqueda)
    })
    setFilterList(listaFiltrada)
  }

  return (
    <div>
      {/*filtro*/}
      <form>
        <input type="text" placeholder="Buscar"
          onChange={filtrado} />
      </form>
      {/*lista*/}
      <Users listaUsers={filterList.length > 0 ? filterList : userList} />
    </div>
  )
}

export default App