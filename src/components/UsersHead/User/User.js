import React from 'react';

const User = (props) => {
    const {id, name, username, email, street, suite, city} = props
        return (
        <div className="user">
<div>ID: {id}</div>
<div>Name: {name}</div>
<div>Username: {username}</div>
<div>Email: {email}</div>
<div>
    Adress:
    <div>Street: {street}</div>
    <div>Suite: {suite}</div>
    <div>City: {city}</div>
</div>
        </div>
    );
};

export default User;