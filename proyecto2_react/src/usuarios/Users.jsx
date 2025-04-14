import UserItem from "./UserItem"

const Users = ({listaUsers})=>{
    return(
        <ul>
            {
                listaUsers.map((user)=>{
                    return (
                        <UserItem usuario={user}/>
                    )
                })
            }
        </ul>
    )
}

export default Users