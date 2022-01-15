import {useEffect, useState} from "react";
import User from "../User/User";

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {setUsers(value)});
    }, []);

    return (
        <div className="userhead">
            {users.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username} email={value.email}
                                      street={value.address.street} suite={value.address.suite} city={value.address.city} zipcode={value.address.zipcode}/>)}
        </div>
    )
};

export default Users;