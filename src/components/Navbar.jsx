import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {ImUsers} from 'react-icons/im';
import {RiContactsBook2Fill} from 'react-icons/ri';
import {BsFillChatFill} from 'react-icons/bs';

export default function Navbar() {

    const {logged,user} = useSelector(state => state.auth) // funcion que nos permite leer del estado global
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
                    to="/contacts"
                >
                    <RiContactsBook2Fill className='navbar-icon'/>
                </NavLink>
                <p>Contacts</p>
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
            {logged&&<p>{user.name}</p>}
        </nav>
    )
}
