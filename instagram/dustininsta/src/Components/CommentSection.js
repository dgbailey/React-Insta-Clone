import React from 'react';

import Comment from './Comment';
import './CommentSection.css';

const CommentSection = (props)=> {
    return(
        <div className='comment-cont'>
            <div className='emotion-btns'>
                <ul className='e-btn-container'>
                    <li><button className='comment'><i class="far fa-comment"></i></button></li>
                    <li><button className='like'><i class="far fa-heart"></i></button></li>
                </ul>
                <div className='emotion-stats'>{props.likes}</div>
                
            </div>

            <div className='text-array-cont'>
                {props.comments.map( currentComment => <Comment 
                username={currentComment.username} text={currentComment.text} timestamp={props.timestamp}/>)}
                
            </div>
            <div className='add-comment-cont'>
                <input className='commentBtn' placeholder='Add a comment ...'></input>
            </div>

        </div>
    )
}



export default CommentSection;