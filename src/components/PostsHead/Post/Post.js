import React from 'react';

const Post = (props) => {
    const {userId, id, title, body} = props
    return (
        <div className='post'>

<div>Userid: {userId}</div>
<div>Id: {id}</div>
<div>Titly: {title}</div>
<div>Body: {body}</div>

        </div>
    );
};

export default Post;