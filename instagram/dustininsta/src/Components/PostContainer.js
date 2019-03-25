import React from 'react';
import CommentSection from './CommentSection';

import './PostContainer.css';

const PostContainer = (props) =>{
    return(
        <div className='post-cont'>
            <div className='post-banner'>
                <ul className='banner-list'>
                    <li className='banner-img'><img src={props.thumb} alt=''></img></li>
                    <li className='banner-profile-name'>{props.username}</li>
                </ul>
            </div>
            <div className='img-cont'>
                <img src={props.mainImg} alt=''></img>
            </div>
            <CommentSection/>
        
        </div>

        
    )
}


export default PostContainer;