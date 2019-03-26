import React from 'react';

import Comment from './Comment';

import './CommentSection.css';
import PropTypes from 'prop-types';

const CommentSection = (props)=> {
    return(
        <div className='comment-cont'>
            <div className='emotion-btns'>
                <ul className='e-btn-container'>
                <li><button className='like'><i className="far fa-heart"></i></button></li>
                    <li><button className='comment'><i className="far fa-comment"></i></button></li>
                    
                </ul>
                <div className='emotion-stats'>{props.likes} likes</div>
                
            </div>

            <div className='text-array-cont'>
                {props.comments.map( currentComment => <Comment 
                username={currentComment.username} text={currentComment.text} timestamp={props.timestamp}/>)}
                
            </div>
            <p className='timestamp'>{props.timestamp}</p>
            <div className='add-comment-cont'>
                <input className='commentBtn' placeholder='Add a comment ...'></input>
            </div>

        </div>
    )
}

CommentSection.propTypes = {
    timestamp:PropTypes.string,
    comments:PropTypes.arrayOf(
        PropTypes.shape({
            username:PropTypes.number,
            text:PropTypes.string
        })
    )
    
}



export default CommentSection;