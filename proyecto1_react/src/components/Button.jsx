import './Button.css'

const Button = (props)=>{
    const clickButtonCont = (incremento)=>{
        props.setContador(contador=>contador + incremento)
    }

    return(
        <button onClick={()=>clickButtonCont(props.contador)}>{props.mensaje}</button>  
    )
}

export default Button