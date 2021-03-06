import React from 'react';

import Comment from './Comment';

import './CommentSection.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

import styled, { css } from 'styled-components';
import UserName from './styles/reusables/UserName';

class CommentSection extends Component {
    constructor(props){
        super(props);
        
        
        this.state ={
            comments:this.props.comments,
            index:this.props.key,
            comment:'',
            emotionstats:this.props.likes,
            date:Date.now(),
            
        
        }
       
    }

    addNewComment = (event,postIndex)=>{
        event.preventDefault();
        const newcomment = {text:this.state.comment,
            username:localStorage.getItem('username')}

        this.setState(
            
            {comments:[...this.state.comments,newcomment]
            }
        )
        this.setState(
            
            {comment:''
            }
        )

        
        // this.setState({comments:})
    }

    handleChanges = (event) =>{
    
        this.setState(
          {comment: event.target.value}
        )

        
    }

    incrementLikes = (state,props) => {
        this.setState({emotionstats:this.state.emotionstats +1})}
    
    render(){
        return(
            <div className='comment-cont'>
                <div className='emotion-btns'>
                    <ul className='e-btn-container'>
                    <li><button className='like' onClick={this.incrementLikes}><i className="far fa-heart"></i></button></li>
                        <li><button className='comment'><i className="far fa-comment"></i></button></li>
                        
                    </ul>
                    <div className='emotion-stats'>{this.state.emotionstats} likes</div>
                    
                </div>

                <div className='text-array-cont'>
                    {this.state.comments.map((currentComment,index) => 
                    <Comment 
                    key={index} 
                    username={currentComment.username} 
                    text={currentComment.text} 
                    timestamp={this.props.timestamp} 
                    
                    />)}
                   
                    
                </div>
                <p className='timestamp'>{this.props.timestamp}</p>
                <div className='add-comment-cont'>
                    <form id='comment-form' onSubmit={this.addNewComment}>
                        <input className='commentBtn' 
                        value={this.state.comment}
                        placeholder='Add a comment ...' 
                        onChange={this.handleChanges} ></input>
                    </form>
                </div>

            </div>
        )
    }
}

CommentSection.propTypes = {
    timestamp:PropTypes.string,
    comments:PropTypes.arrayOf(
        PropTypes.shape({
            username:PropTypes.string,
            text:PropTypes.string
        })
    )
    
}



export default CommentSection;