import React, { Component } from 'react';
import data from './dummy-data';

import Searchbar from './Components/Searchbar';
import PostContainer from './Components/PostContainer';

const PostsPage = ({allstate,searchResults,handleSearchChanges}) => {
    return(
        <div className='posts-page-cont'>
            <Searchbar searchtext={allstate.searchtext} 
            searchResults={searchResults}
            handleSearchChanges ={handleSearchChanges}/>
            {allstate.masterData.map( (currentPost, index) => 
        
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
    )   

}

export default PostsPage;