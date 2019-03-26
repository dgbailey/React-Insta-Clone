import React, { Component } from 'react';
import logo from './logo.svg';
import data from './dummy-data';

import Searchbar from './Components/Searchbar';
import PostContainer from './Components/PostContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      masterData:data
    }
  }


  render() {
    return (
      <div className="App">
        <Searchbar/>
        {this.state.masterData.map( currentPost => 
      
            <PostContainer 
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
    );
  }
}

export default App;
