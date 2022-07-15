import React from 'react';
import {AiTwotoneSetting} from 'react-icons/ai';
import {BsMoonFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function HamburgerMenu({hide}) {
    return (
        <div className={`${!hide ? 'hide-menu' : 'show-menu'} hamburger-menu`}>
            <Link to='/settings' className='hamburger-menu-item'>
                <AiTwotoneSetting className='hamburger-menu-icon'/>
                <p>Settings</p>
            </Link>        
            <div className='hamburger-menu-item'>
                <BsMoonFill className='hamburger-menu-icon'/>
                <p>Dark mode</p>
            </div>        
            <button className='logout-button'>
                Logout
            </button>
        </div>
    )
}
