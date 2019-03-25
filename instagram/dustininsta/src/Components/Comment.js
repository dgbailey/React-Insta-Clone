import React from 'react';
import './Comment.css';

const Comment = (props) =>{
    return(
    <ul className='comment-cont'>
        <li className='username'>{props.username}</li>
        <li className='text'>{props.text}</li>
        <li className='timestamp'>{props.timestamp}</li>

    
    </ul>
    )
}



export default Comment;