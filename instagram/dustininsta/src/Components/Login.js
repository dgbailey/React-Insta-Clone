import React, { Component } from 'react';
import instalogo from '../assets/Instagram_simple_icon.svg';
import instatext from '../assets/Instagram_logo.svg';
import './Login.css';
import styled, { css } from 'styled-components'


//start styled components
const LoginBtn = styled.button`

    width: 250px;
    margin-top:10px;
    background: #270069;

    border-style: none;

    border-radius: 3px;
    font-size: 12px;
    padding:10px;
    font-weight: bold;
    color:white;
    opacity: .75;

    &:hover{
    cursor: pointer;
    opacity: 1;
    }
   


`

const LoginContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:ghostwhite;
    height:500px;
    width:300px;
    margin:0px auto;
    margin-top:100px;
    margin-bottom: 100px;
    box-shadow: 0 13px 27px -5px rgba(50,50,93,.25),0 8px 16px -8px rgba(0,0,0,.3),0 -6px 16px -6px rgba(0,0,0,.025);
    background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
    background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
    border-radius: 5px;
    padding:25px;
`

//end styled components begin class component

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
            <LoginContainer>
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
                <form className='loginform password'
                onSubmit={this.login}>
                    <input className='password' 
                    
                    placeholder='password'></input>
                </form>
                <LoginBtn className='submitLogin'
                        onClick={this.login}
                        >Log In</LoginBtn>
                
                
            </LoginContainer>
        )
    }



}
export default Login;
    