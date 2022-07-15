import React, {useState} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import HamburgerMenu from './HamburgerMenu';

export default function Header({title}) {
    const [showingMenu, setShowingMenu] = useState(false);
    return (
        <>
            <div className='header-container'>
                <div className='info-header-container'>
                    <div className='profile-img-container'></div>
                    <h2>{title}</h2>
                </div>
                <div className='hamburger-menu-container'>
                    <GiHamburgerMenu 
                        onClick={e => setShowingMenu(!showingMenu)} 
                        className={`${showingMenu && 'active-menu'} hamburger-menu-icon`}
                    />
                    <HamburgerMenu hide={showingMenu}/>
                </div>
            </div>
        </>
    )
}
