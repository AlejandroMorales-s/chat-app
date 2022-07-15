import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {ImUsers} from 'react-icons/im';
import {MdAmpStories} from 'react-icons/md';
import {BsFillChatFill} from 'react-icons/bs';

export default function Navbar() {

    const {logged,user} = useSelector(state => state.auth) // funcion que nos permite leer del estado global
    console.log(logged); 
    console.log(user); 
    return (
        <nav className='navbar-container'>
            <div className='navbar-button'>
                <NavLink 
                    className={({isActive}) => isActive ? 'active-nav-link': undefined} 
                    to="/chats"
                >
                    <BsFillChatFill className='navbar-icon'/>
                </NavLink>
                <p>Chats</p>
            </div>
            <div className='navbar-button'>
                <NavLink 
                    className={({isActive}) => isActive ? 'active-nav-link': undefined} 
                    to="/users"
                >
                    <ImUsers className='navbar-icon'/>
                </NavLink>
                <p>Users</p>
            </div>
            <div className='navbar-button'>
                <NavLink 
                    className={({isActive}) => isActive ? 'active-nav-link': undefined} 
                    to="/stories"
                >
                    <MdAmpStories className='navbar-icon'/>
                </NavLink>
                <p>Stories</p>
            </div>
            {logged&&<p>{user.name}</p>}
        </nav>
    )
}
