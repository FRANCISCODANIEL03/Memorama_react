import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Header = ()=>{
    const { currentUser } = useContext(AppContext)
    return (
        <header className="bg-slate-800 text-white p-4 w-full text-center text-2xl font-bold">
            Hola {currentUser.name} 👋
        </header>
    )
}

export default Header