import React from 'react';

import './CommentSection.css';

const CommentSection = (props)=> {
    return(
        <div className='comment-cont'>
            <div className='emotion-btns'>
                <ul className='e-btn-contianer'>
                    <li><button className='comment'></button></li>
                    <li><button className='like'></button></li>
                </ul>
                <div className='emotion-stats'></div>
                
            </div>

            <div className='text-array-cont'>
                
            </div>
            <div className='add-comment-cont'>
                <input className='commentBtn' placeholder='Add a comment ...'></input>
            </div>

        </div>
    )
}



export default CommentSection;