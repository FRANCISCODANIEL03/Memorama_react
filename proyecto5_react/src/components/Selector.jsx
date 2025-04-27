import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Selector = ()=>{
    const { Users, setCurrentUserId } = useContext(AppContext)

    return (
        <ul className="my-5">
            
        </ul>
    )
}

export default Selector