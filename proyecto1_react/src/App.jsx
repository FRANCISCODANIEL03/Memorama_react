import { useState } from "react"
import Button from "./components/Button";

function App() {
  const [contador, setContador] = useState(0);
  
  return (
    <div id="container">
      <h1>No hiciste caso {contador} veces</h1>
      {
        contador%2 == 0 ? (<p>El contador es par</p>):(<p>El contador es impar</p>)
      }
      {
        contador < -10 ? setContador(10) : null
      }
      {
        contador > 10 ? setContador(-10) : null
      }
      <Button contador={1} 
      mensaje={"Aumentar el contador"}
      setContador={setContador}/>
      <Button contador={-1} 
      mensaje={"Decrementar el contador"}
      setContador={setContador}/>
    </div>
  )
}

export default App
