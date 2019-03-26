import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';

import './PostContainer.css';

const PostContainer = (props) =>{
    return(
        <div className='post-cont'>
            <div className='post-banner'>
                <ul className='banner-list'>
                    <li className='banner bimg'>
                        <img className='thumz' src={props.thumb} alt=''></img>
                    </li>
                    <li className='banner bprofile-name'>{props.username}</li>
                </ul>
            </div>
            <div className='img-cont'>
                <img className='primary-img' src={props.mainImg} alt=''></img>
            </div>
            <CommentSection likes={props.likes} timestamp={props.timestamp} comments={props.comments}/>
        
        </div>

        
    )
}

PostContainer.propTypes = {
    likes:PropTypes.number,
    timestamp:PropTypes.string,
    comments:PropTypes.arrayOf(
        PropTypes.shape({
            username:PropTypes.string,
            text:PropTypes.string
        })
    )
}


export default PostContainer;