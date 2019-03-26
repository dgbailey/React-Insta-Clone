import React from 'react';

import Comment from './Comment';

import './CommentSection.css';
import PropTypes from 'prop-types';
import { Component } from 'react';

class CommentSection extends Component {
    constructor(props){
        super(props);
        
        
        this.state ={
            comments:this.props.comments,
            index:this.props.key,
            comment:'',
            
        }
       
    }

    addNewComment = (event,postIndex)=>{
        event.preventDefault();
        const newcomment = {text:this.state.comment,
            username:'testuser_'}

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
    render(){
        return(
            <div className='comment-cont'>
                <div className='emotion-btns'>
                    <ul className='e-btn-container'>
                    <li><button className='like'><i className="far fa-heart"></i></button></li>
                        <li><button className='comment'><i className="far fa-comment"></i></button></li>
                        
                    </ul>
                    <div className='emotion-stats'>{this.props.likes} likes</div>
                    
                </div>

                <div className='text-array-cont'>
                    {this.state.comments.map( currentComment => 
                    <Comment 
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