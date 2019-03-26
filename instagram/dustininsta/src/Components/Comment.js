import React from 'react';
import './Comment.css';

const Comment = (props) =>{
    return(
    <ul className='i-comment-cont'>
        <li className='cont username'>{props.username}</li>
        <li className='cont text'>{props.text}</li>
        

    
    </ul>
    )
}



export default Comment;