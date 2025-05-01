import React from 'react'

const Header = (props)=>{
    return (
        <header className="bg-slate-800 text-white p-4 w-full text-center text-2xl font-bold">
            Hola {props.user.name} 👋
        </header>
    )
}

export default Header