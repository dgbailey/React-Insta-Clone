import React from 'react';

const CommentSection = ()=> {
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
                <Comment/>
            </div>
            <div className='add-comment-cont'>
                <button className='commentBtn'>Add a comment ...</button>
            </div>

        </div>
    )
}



export default CommentSection;