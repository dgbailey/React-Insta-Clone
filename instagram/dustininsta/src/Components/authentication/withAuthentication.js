import React, { Component } from 'react';


const withAuthenticate = App => Login =>
    class extends Component {
        constructor(){
            super();
            this.state={
                loggedin:false
            }
      
        }
        
        componentDidMount(){
            if(localStorage.getItem('username')){
                this.setState({loggedin:true})
            }
            
        }
       
        render (){
            if(this.state.loggedin){
            return <App allstate={this.props.allstate} 
            searchResults={this.props.searchResults}
            handleSearchChanges ={this.props.handleSearchChanges}
            logOut={this.props.logOut}/>}
            
            return <Login/>
        }
    };

// const authstatus = Login.props.authstatus;
// if (!authstatus){
//     return <Posts/>
// }
// return <Login/>


export default withAuthenticate;

