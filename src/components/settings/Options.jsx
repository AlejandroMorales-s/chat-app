import React, {useState} from 'react';
import {BsFillMoonFill} from 'react-icons/bs';
import {TbLetterCase} from 'react-icons/tb';
import {appTheme} from '../../localStorage';

export default function Options() {
    const [lightMode, setLightMode] = useState(false);
    const theme = localStorage.getItem('theme');
    const darkMode = () => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'light');
            setLightMode(true);
        } else {
            localStorage.setItem('theme', 'dark');
            setLightMode(false);
        };
        const item = localStorage.getItem('theme');
        appTheme(item);
    };
    return (
        <>
            <div className='settings-options-container'>
                <div onClick={darkMode} className='settings-option'>
                    <BsFillMoonFill className='settings-option-icon'/>
                    <div>
                        <p>Dark Mode</p>
                        <p className='dark-mode-status'>{lightMode ? 'Disabled' : 'Enabled'}</p>
                    </div>
                </div>
                <div className='settings-option'>
                    <TbLetterCase className='settings-option-icon'/>
                    <div>
                        <p>Font Size</p>
                        <p className='font-size-status'>Medium</p>
                    </div>
                </div>
            </div>
        </>
    )
}
