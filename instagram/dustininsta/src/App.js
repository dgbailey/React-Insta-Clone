import React, { Component } from 'react';
// import logo from './logo.svg';
import data from './dummy-data';

import Searchbar from './Components/Searchbar';
import PostContainer from './Components/PostContainer';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      masterData:[]
    }
  }


  render() {
    return (
      <div className="App">
        <Searchbar/>
        {this.state.masterData.map( (currentPost, index) => 
      
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
    );
  }

  componentDidMount(){
    this.setState({masterData:data});
  }

  
}

export default App;
