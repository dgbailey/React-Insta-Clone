import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from './CommentSection';

import './PostContainer.css';
import styled, { css } from 'styled-components';

export const ThumbImg = styled.img`

    height:50px;
    width:50px;
    border-radius: 50%;
`

export const UserName = styled.li`

    margin: ${props => props.banner ? '10px':null};
    font-weight: ${props => props.banner ? 'bold':null};
    font-size: ${props => props.banner ? '15px':null};;
    margin: ${props => props.comment ? 'none':null};
    font-weight: ${props => props.comment ? '400px':null};
    font-size: ${props => props.comment ? '12px':null};
`


const PostContainer = (props) =>{
    return(
        <div className='post-global-container'>
            <div className='post-cont'>
                <div className='post-banner'>
                    <ul className='banner-list'>
                        <li className='banner bimg'>
                            <ThumbImg src={props.thumb} alt=''></ThumbImg>
                        </li>
                        <UserName banner>{props.username}</UserName>
                    </ul>
                </div>
                <div className='img-cont'>
                    <img className='primary-img' src={props.mainImg} alt=''></img>
                </div>
                <CommentSection likes={props.likes} timestamp={props.timestamp} comments={props.comments} key={props.key}/>
            
            </div>
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