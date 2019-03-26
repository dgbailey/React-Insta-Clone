import React from 'react';
import './Searchbar.css';
import instalogo from '../assets/Instagram_simple_icon.svg';
import instatext from '../assets/Instagram_logo.svg';

const Searchbar = (props) => {
    return(
        <ul className='search-cont'>
            <li className='asset-cont'>
                <div className='asset two'><img src={instalogo}></img></div>
                <div className='asset one'><img src={instatext}></img></div>
                
            </li>
            <li className='search-field'>
                <input
                placeholder='Search'></input>
            </li>
            <li className='nav-items'>
                <ul className='mini-nav'>
                    <li className='mini one'><i className="far fa-compass"></i></li>
                    <li className='mini two'><i className="far fa-heart"></i></li>
                    <li className='mini three'><i className="far fa-user"></i></li>
                </ul>
            </li>
            
        </ul>
    )
}

export default Searchbar;