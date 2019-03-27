import React, { Component } from 'react';
// import logo from './logo.svg';
import data from './dummy-data';

// import Searchbar from './Components/Searchbar';
// import PostContainer from './Components/PostContainer';
import PostsPage from './PostsPage';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      masterData:[],
      searchtext:''
    }
  }


  render() {
    return (
      <div className="App">
        <PostsPage allstate={this.state} 
        searchResults={this.searchResults}
        handleSearchChanges ={this.handleSearchChanges}/>

        {/* <Searchbar searchtext={this.state.searchtext} 
        searchResults={this.searchResults}
        handleSearchChanges ={this.handleSearchChanges}/>
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
          
          
        } */}
        
        
        
      </div>
    );
  }

  componentDidMount(){
    this.setState({masterData:data});
  }

  searchResults = (text) =>{
    
    console.log('this is my text',text);
    const results = data.filter(currentValue => currentValue.username.includes(text));
    
    if(text === ''){
      this.setState({masterData:data})
    }
    this.setState({masterData:results});
    
  }
  handleSearchChanges = (event) =>{
    
    this.setState(
      {searchtext: event.target.value}
    )
    this.setState(
      {searchtext: event.target.value}
    )

    
}
  
}

export default App;
