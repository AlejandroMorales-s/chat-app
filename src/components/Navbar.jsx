import React from 'react';
import { NavLink } from 'react-router-dom';
import {ImUsers} from 'react-icons/im';
import {RiContactsBook2Fill} from 'react-icons/ri';
import {BsFillChatFill} from 'react-icons/bs';

export default function Navbar() {

    const navbarButtons = [
        {
            id: 1,
            name: 'Chats',
            icon: <BsFillChatFill className='navbar-icon'/>,
            link: '/chats'
        },
        {
            id: 2,
            name: 'Contacts',
            icon: <RiContactsBook2Fill className='navbar-icon'/>,
            link: '/contacts'
        },
        {
            id: 3,
            name: 'Users',
            icon: <ImUsers className='navbar-icon'/>,
            link: '/users'
        }
    ];

    return (
        <nav className='navbar-container'>
            {navbarButtons.map(button => {
                return (
                    <div key={button.id} className='navbar-button'>
                        <NavLink 
                            className={({isActive}) => isActive ? 'active-nav-link': undefined} 
                            to={button.link}
                        >
                            {button.icon}
                        </NavLink>
                        <p>{button.name}</p>
                    </div>
                )
            })}
        </nav>
    )
}
