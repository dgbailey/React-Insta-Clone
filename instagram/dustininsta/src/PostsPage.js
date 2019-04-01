import React, { Component } from 'react';
import data from './dummy-data';
import './PostsPage.css';
import Searchbar from './Components/Searchbar';
import PostContainer from './Components/PostContainer';

const PostsPage = (props) => {
    return(
        <div className='posts-page-cont'>
            <Searchbar searchtext={props.allstate.searchtext} 
            searchResults={props.searchResults}
            handleSearchChanges ={props.handleSearchChanges}
            logOut={props.logOut}/>
            <div className='posts-cont-for-fixed'>
                {props.allstate.masterData.map( (currentPost, index) => 
            
                    <PostContainer 
                    key= {index} 
                    username={currentPost.username} 
                    thumb={currentPost.thumbnailUrl} 
                    mainImg={currentPost.imageUrl} 
                    likes={currentPost.likes} 
                    timestamp={currentPost.timestamp}
                    comments={currentPost.comments}
                    />
                    )
                }
            </div>
            
     
             
        </div>
    )   

}

export default PostsPage;