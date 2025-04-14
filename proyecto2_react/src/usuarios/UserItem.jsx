
const UserItem = ({usuario})=>{
    return(
        <li>
        <h3>Name: {usuario.name}</h3>
        <h4>Username: {usuario.username}</h4>
        <h4>Email: {usuario.email}</h4>
        </li>
    )
}

export default UserItem