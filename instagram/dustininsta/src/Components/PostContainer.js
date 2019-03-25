import React from 'react';
import CommentSection from './CommentSection';

const PostContainer = () =>{
    return(
        <div className='post-cont'>
            <div className='post-banner'>
                <ul className='banner-list'>
                    <li className='banner-img'><img src='' alt=''></img></li>
                    <li className='banner-profile-name'></li>
                </ul>
            </div>
            <div className='img-cont'>
                <img src='' alt=''></img>
            </div>
            <CommentSection/>
        
        </div>

        
    )
}


export default PostContainer;