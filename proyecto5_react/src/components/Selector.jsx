import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Selector = ()=>{
    const { Users, setCurrentUserId } = useContext(AppContext)

    return (
        <ul className="my-5">
            {
                Users.map((user, i) =>(
                    <li key={i} className="bg-blue-200 my-3 p-3 rounded-md font-bold text-lg hover:bg-blue-500 shadow-lg shadow-blue-500/50"
                    onClick={()=>setCurrentUserId(user.id)}>
                        <button>
                            {user.name}
                        </button>
                    </li>
                ))
            }
        </ul>
    )
}

export default Selector