import React from 'react';
import './Searchbar.css';
import instalogo from '../assets/Instagram_simple_icon.svg';
import instatext from '../assets/Instagram_logo.svg';

import styled, { css } from 'styled-components';


//start components
import Header from './Header';

const GlobalNav = styled.ul`
    height:80px;
    width:100%;
    border-bottom:1px solid lightgray;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:20px;

`

const AssetContainer = styled.li`
    
    height:40px;
    
    display:flex;
    align-items: center;  
    justify-content: space-between;

`
const SearchField = styled.li`
    
    border-radius: 2px;
    height:25px;
    width:200px;
    &:hover{
        border-bottom:1px solid black;
    }

`
const MiniNav = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

`

const NavItem = styled.li`
    background: ${props => props.logout ? '#d9ffec' : 'none'}
    padding-top: ${props => props.logout ? '3px' : 'none'}
    border-radius: ${props => props.logout ? '5px' : 'none'}
    cursor: ${props => props.logout ? 'pointer' : 'none'}
    &:hover{
        background:${props => props.logout ? 'pink' : 'none'}
    }
`

const Searchbar = (props) => {
    return(
        <Header>
            <GlobalNav>
                <AssetContainer>
                    <div className='asset two'><img src={instalogo}></img></div>
                    <span className='vert-line'></span>
                    <div className='asset one'><img src={instatext}></img></div>
                </AssetContainer>   
                
                <SearchField>
                    
                    <form className='searchform'>

                        <input
                        value={props.searchtext}
                        onChange={(e)=>{props.handleSearchChanges(e);props.searchResults(props.searchtext)}}
                        placeholder='Type to search'></input>
                    </form>
                </SearchField>
                <li className='nav-items'>
                    <MiniNav>
                        <li className='mini one'><i className="far fa-compass"></i></li>
                        <li className='mini two'><i className="far fa-heart"></i></li>
                        <NavItem logout  onClick={props.logOut}><i className="far fa-user"></i></NavItem>
                    </MiniNav>
                </li>
                
            </GlobalNav>
        </Header>
    )
}

export default Searchbar;