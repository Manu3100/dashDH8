import { useState, useEffect } from 'react'


function UsersApi() {
const [users, setUsers] = useState([]);
    
    useEffect(() => {
        console.log('se monto')
        fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            setUsers(data.users)
            console.log(users)
        })
        .catch(error => console.error(error));
    }, [])


    return (
        <div>
            <h2> Usuarios </h2>
            <ul>
          { users.map((usuario, i) => {
            return (
                
                    <li key={i}>
                        <h4>{usuario.nombre}</h4>
                        <h5>{usuario.apellido}</h5>
                        <h6>{usuario.email}</h6>
                    </li>
                    
                
            )
          })}
            </ul>
        </div>
    )
}

export default UsersApi