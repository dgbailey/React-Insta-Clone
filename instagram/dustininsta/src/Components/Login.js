import React, { Component } from 'react';

import './Login.css';

class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            password:''
        }
    }
    login =() => {
        localStorage.setItem('username',this.state.username);
        window.location.reload()
    }

    handleChanges = (event) =>{
    
        this.setState(
          {username: event.target.value}
        )
    }

    
       
    render(){
        return(
            <div className='login-container'>
                <form className='username'>
                    <input className='username'
                    onChange={this.handleChanges}></input>
                </form>
                <form className='password'>
                    <input className='password'></input>
                </form>
                <button className='submitLogin'
                        onClick={this.login}
                        >Submit</button>
                
                
            </div>
        )
    }



}
export default Login;
    