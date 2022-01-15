import React from 'react';

const Comment = (props) => {
    const {postId, id, name, email, body }=props
    return (
        <div className='comment'>
           <div>PostId: {postId}</div>
           <div>Id: {id}</div>
           <div>Name: {name}</div>
           <div>Email: {email}</div>
           <div>Body: {body}</div>
        </div>
    );
};

export default Comment;