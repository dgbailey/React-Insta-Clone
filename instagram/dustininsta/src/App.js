import React, { Component } from 'react';
// import logo from './logo.svg';
import data from './dummy-data';

// import Searchbar from './Components/Searchbar';
// import PostContainer from './Components/PostContainer';
import PostsPage from './PostsPage';
import Login from '../src/Components/Login';
import withAuthenticate from './Components/authentication/withAuthentication';
import './App.css';

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login);
console.log(withAuthenticate);

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
  
        <ComponentFromWithAuthenticate allstate={this.state} 
        searchResults={this.searchResults} 
        handleSearchChanges ={this.handleSearchChanges}
        />

        
      </div>
    );
  }

  componentDidMount(){
    this.setState({masterData:data});
  }

  searchResults = () =>{
    
    
   
    const results = data.filter(currentValue => currentValue.username.includes(this.state.searchtext));
    console.log(this.state.searchtext)
    if(this.state.searchtext === ''){
      this.setState({masterData:data})
    }
    this.setState({masterData:results});
    
  }
  handleSearchChanges = (event) =>{
    
    this.setState(
      {searchtext: event.target.value}
    )
    // this.setState(
    //   {searchtext: event.target.value}
    // )

    

  
  }
}

export default App;
