import React from 'react';
import './Comment.css';

import styled, { css } from 'styled-components';
import UserName from './styles/reusables/UserName';

const Comment = (props) =>{
    return(
    <ul className='i-comment-cont'>
        <UserName comment>{props.username}</UserName>
        <li className='cont text'>{props.text}</li>
        

    
    </ul>
    )
}



export default Comment;