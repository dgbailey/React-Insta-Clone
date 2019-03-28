import React, { Component } from 'react';
import instalogo from '../assets/Instagram_simple_icon.svg';
import instatext from '../assets/Instagram_logo.svg';
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
                <div className='logologin'><img src={instatext}/></div>
                <h2 className='login-header-description'>Log in to see photos and videos from your friends.</h2>
                <div className='decor-container'>
                    <span className='decor'></span>
                    <span className='small-logo'><img className='login-cam-logo' src={instalogo}></img></span>
                    <span className='decor'></span>
                </div>
                <form className='loginform username'>
                    <input className='username'
                    placeholder='username'
                    onChange={this.handleChanges}></input>
                </form>
                <form className='loginform password'>
                    <input className='password'
                    placeholder='password'></input>
                </form>
                <button className='submitLogin'
                        onClick={this.login}
                        >Log In</button>
                
                
            </div>
        )
    }



}
export default Login;
    